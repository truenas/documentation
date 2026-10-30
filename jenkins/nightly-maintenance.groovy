// DOCS-2686 — Nightly Maintenance for the Docs Versioned Sites setup.
// Three scheduled duties that must NOT ride on pushes:
//   1. Software-status auto-PR (was inline in the old master build; missed during quiet
//      periods with no master pushes).
//   2. Changelog CSV auto-PR (DOCS-2785): refresh each live version branch's published changelog
//      CSVs from its public Jira filters (static/data/changelog-sources.json on that branch) and
//      open one PR per branch that changed.
//   3. Prod reconcile: re-assert every LIVE version's symlink + one whole-zone CDN purge —
//      the deliberate replacement for the old "TrueNAS Docs Update Master" fan-out safety net.
// Content freshness does NOT depend on this job: each version's own pipeline builds → rsyncs →
// symlinks → purges on every push. This is a nightly safety net, not the publish path.
// retry() has no delay, so a short DNS/network blip used up every attempt within seconds
// (build #14: three fetches in 4s). This sleeps between attempts: base, 2x base, 4x base...
def retryBackoff(int attempts, int baseSeconds, Closure body) {
  for (int attempt = 1; attempt <= attempts; attempt++) {
    try {
      body()
      return
    } catch (e) {
      if (e instanceof InterruptedException) { throw e }   // user abort must still abort
      if (attempt == attempts) { throw e }
      int wait = baseSeconds * (1 << (attempt - 1))
      echo "Attempt ${attempt}/${attempts} failed (${e}); retrying in ${wait}s."
      sleep time: wait, unit: 'SECONDS'
    }
  }
}

pipeline {
  agent { label 'hugo-pr' }

  triggers { cron('H 3 * * *') }        // nightly ~03:00; H randomizes the minute

  options {
    disableConcurrentBuilds()
    timestamps()
    buildDiscarder(logRotator(numToKeepStr: '30'))
  }

  environment {
    REPO = 'https://github.com/truenas/documentation'
    CRED = 'DocsPipeLines'
  }

  stages {

    stage('Software status auto-PR') {          // Duty 1
      steps {
        git branch: 'master', url: "${REPO}", credentialsId: "${CRED}"
        sh 'pip3 install --break-system-packages -r requirements.txt'
        script {
          // Non-zero here means the script itself flagged a real problem (an
          // unresolved profile, e.g. an upstream CDN returning bad data — see
          // its module docstring for the full exit-code contract). Don't let
          // that abort the build: Duty 2 (Reconcile/Purge) below is the more
          // important safety net and must still run. Mark the build UNSTABLE
          // instead so it's visible without blocking anything downstream.
          def scriptStatus = sh(script: 'python3 scripts/update-software-status.py', returnStatus: true)
          if (scriptStatus != 0) {
            currentBuild.result = 'UNSTABLE'
            echo "update-software-status.py reported a problem (exit ${scriptStatus}) — see console output above and scripts/software-status-error.log. Continuing to Reconcile."
          }

          def changed = sh(
            script: 'git diff --exit-code data/software_status_config.yaml',
            returnStatus: true
          ) != 0
          if (changed) {
            echo 'Software status changed — creating/updating PR.'
            def prStatus = sh(script: 'bash scripts/create-software-status-pr.sh', returnStatus: true)
            if (prStatus != 0) {
              currentBuild.result = 'UNSTABLE'
              echo "create-software-status-pr.sh failed (exit ${prStatus}) — see console output above. Continuing to Reconcile."
            }
          } else {
            echo 'Software status up to date.'
          }
        }
      }
    }

    stage('Changelog CSV auto-PR') {             // Duty 2
      steps {
        script {
          // The scripts run from this master checkout; the data lives on each version branch,
          // so each branch is checked out as a throwaway worktree. Python deps were installed
          // by the stage above. Every failure here marks the build UNSTABLE and moves on:
          // Reconcile/Purge below must still run. The network-bound commands run under the shell
          // `timeout` (exit 124 reads as an ordinary failure) rather than the Jenkins timeout step,
          // whose abort would be rethrown as an InterruptedException and fail the whole build.
          def worktreeRoot = "${env.WORKSPACE}/.changelog-worktrees"
          def branches = []
          try {
            retryBackoff(3, 15) { sh 'timeout --kill-after=30 300 git fetch --no-tags --force origin "+refs/heads/*:refs/remotes/origin/*"' }
            // same version-branch filter and live check as Reconcile below — keep them in step
            def raw = sh(returnStdout: true, script:
              "git for-each-ref --format='%(refname:short)' refs/remotes/origin " +
              "| sed 's#^origin/##' | grep -E '^(master|[0-9]+([.][0-9]+)?)\$' || true"
            ).trim()
            branches = raw ? raw.split('\\n') : []
          } catch (e) {
            if (e instanceof InterruptedException) { throw e }   // user abort must still abort
            currentBuild.result = 'UNSTABLE'
            echo "Could not list version branches for the changelog refresh: ${e}. Continuing to Reconcile."
          }

          sh "git worktree prune; rm -rf '${worktreeRoot}'"
          def refreshed = []
          for (b in branches) {
            try {
              def envText = sh(returnStdout: true,
                script: "git show origin/${b}:jenkins/docs-build.env 2>/dev/null || true").trim()
              if (!envText) { continue }
              def p = readProperties text: envText
              def live = (p.PUBLISH_TO_PROD ?: 'false').trim() == 'true' || (p.ARCHIVED ?: 'false').trim() == 'true'
              if (!live) { continue }
              // a branch opts in by having a sources file; most branches don't
              def hasSources = sh(
                script: "git cat-file -e origin/${b}:static/data/changelog-sources.json 2>/dev/null",
                returnStatus: true
              ) == 0
              if (!hasSources) { continue }

              def wt = "${worktreeRoot}/${b}"
              sh "git worktree add --force --detach '${wt}' origin/${b}"
              try {
                def scriptStatus = sh(script: "timeout --kill-after=30 600 python3 scripts/update-changelogs.py --repo '${wt}'", returnStatus: true)
                if (scriptStatus != 0) {
                  currentBuild.result = 'UNSTABLE'
                  echo "update-changelogs.py reported a problem for ${b} (exit ${scriptStatus}) — see console output above. Other branches and Reconcile continue."
                }
                // the script only edits static/data/*-changelog.csv; its summary file sits in the repo root
                def changed = sh(
                  script: "git -C '${wt}' status --porcelain -- static/data | grep -q .",
                  returnStatus: true
                ) == 0
                if (changed) {
                  echo "Changelog CSVs changed on ${b} — creating/updating PR."
                  def prStatus = sh(
                    script: "cd '${wt}' && BASE_BRANCH='${b}' timeout --kill-after=30 600 bash '${env.WORKSPACE}/scripts/create-changelog-pr.sh'",
                    returnStatus: true
                  )
                  if (prStatus != 0) {
                    currentBuild.result = 'UNSTABLE'
                    echo "create-changelog-pr.sh failed for ${b} (exit ${prStatus}) — see console output above. Continuing."
                  } else {
                    refreshed.add(b)
                  }
                } else {
                  echo "Changelog CSVs up to date on ${b}."
                }
              } finally {
                sh "git worktree remove --force '${wt}' || rm -rf '${wt}'"
              }
            } catch (e) {
              if (e instanceof InterruptedException) { throw e }
              currentBuild.result = 'UNSTABLE'
              echo "Changelog refresh failed for ${b}: ${e}. Continuing."
            }
          }
          sh "git worktree prune; rm -rf '${worktreeRoot}'"
          echo "Changelog PRs opened/updated for: ${refreshed ? refreshed.join(', ') : '(none)'}"
        }
      }
    }

    stage('Reconcile') {                         // Duty 3 — under the shared deploy mutex
      options { lock('docs1-deploy') }
      stages {

        stage('Re-assert symlinks') {
          steps {
            script {
              // make sure we can see every remote branch's docs-build.env
              // Best effort: this fetch has no relation to Duty 1 above, so don't let a
              // transient network blip there (or here) take down the Reconcile/Purge
              // safety net, which must still run. If it still fails after the backoff
              // retries, carry on with the refs already on disk (the changelog stage above
              // fetched them) and mark the build UNSTABLE.
              def fetchFailed = false
              try {
                retryBackoff(3, 15) { sh 'git fetch --no-tags --force origin "+refs/heads/*:refs/remotes/origin/*"' }
              } catch (e) {
                if (e instanceof InterruptedException) { throw e }
                fetchFailed = true
                currentBuild.result = 'UNSTABLE'
                echo "Could not refresh branches from origin (${e}); reconciling from the refs already on disk."
              }
              // same version-branch filter as the Multibranch job
              def raw = sh(returnStdout: true, script:
                "git for-each-ref --format='%(refname:short)' refs/remotes/origin " +
                "| sed 's#^origin/##' | grep -E '^(master|[0-9]+([.][0-9]+)?)\$' || true"
              ).trim()
              def branches = raw ? raw.split('\\n') : []
              if (fetchFailed && !branches) {
                error 'Fetch failed and no version branches are on disk; nothing to reconcile from.'
              }
              def reconciled = []
              for (b in branches) {
                def envText = sh(returnStdout: true,
                  script: "git show origin/${b}:jenkins/docs-build.env 2>/dev/null || true").trim()
                if (!envText) { continue }
                def p = readProperties text: envText
                def pub = (p.PUBLISH_TO_PROD ?: 'false').trim()
                def arch = (p.ARCHIVED ?: 'false').trim()
                def deployScript = (p.DEPLOY_SCRIPT ?: '').trim()
                // re-assert for every LIVE version (active OR archived-but-live) that has a
                // deploy script. Pre-release branches (publish=false, not archived) are skipped.
                if ((pub == 'true' || arch == 'true') && deployScript) {
                  echo "Reconcile ${b}: /root/docs-hugo/${deployScript}"
                  node('security') {
                    retry(2) { sh "/root/docs-hugo/${deployScript}" }
                  }
                  reconciled.add(b)
                }
              }
              echo "Re-asserted symlinks for: ${reconciled ? reconciled.join(', ') : '(none)'}"
            }
          }
        }

        stage('Purge') {                          // one whole-zone purge; kept unconditional
          steps {
            retryBackoff(3, 15) { build job: '/Documentation/PurgeCDNIfInValidState', wait: true }
          }
        }
      }
    }
  }

  // Alerting deferred (see Jenkinsfile) — Mailer 'mail' step throws NoSuchMethodError against
  // the installed plugin; rely on the RED/YELLOW build until IT updates it.
  post {
    failure {
      echo 'Nightly Maintenance FAILED — see console output. Automated alerting pending an IT Mailer plugin fix.'
    }
    unstable {
      echo 'Nightly Maintenance UNSTABLE — the software status update or the changelog CSV refresh reported a problem (see the Software status auto-PR and Changelog CSV auto-PR stages, and scripts/software-status-error.log). Automated alerting pending an IT Mailer plugin fix.'
    }
  }
}
