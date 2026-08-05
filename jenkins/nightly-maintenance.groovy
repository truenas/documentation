// DOCS-2686 — Nightly Maintenance for the Docs Versioned Sites setup.
// Two scheduled duties that must NOT ride on pushes:
//   1. Software-status auto-PR (was inline in the old master build; missed during quiet
//      periods with no master pushes).
//   2. Prod reconcile: re-assert every LIVE version's symlink + one whole-zone CDN purge —
//      the deliberate replacement for the old "TrueNAS Docs Update Master" fan-out safety net.
// Content freshness does NOT depend on this job: each version's own pipeline builds → rsyncs →
// symlinks → purges on every push. This is a nightly safety net, not the publish path.
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
    CRED = 'pcbsd-commit-bot-github'
  }

  stages {

    stage('Software status auto-PR') {          // Duty 1
      steps {
        git branch: 'master', url: "${REPO}", credentialsId: "${CRED}"
        sh 'pip3 install --break-system-packages -r requirements.txt'
        sh 'python3 scripts/update-software-status.py'
        script {
          def changed = sh(
            script: 'git diff --exit-code data/software_status_config.yaml',
            returnStatus: true
          ) != 0
          if (changed) {
            echo 'Software status changed — creating/updating PR.'
            sh 'bash scripts/create-software-status-pr.sh || true'
          } else {
            echo 'Software status up to date.'
          }
        }
      }
    }

    stage('Reconcile') {                         // Duty 2 — under the shared deploy mutex
      options { lock('docs1-deploy') }
      stages {

        stage('Re-assert symlinks') {
          steps {
            script {
              // make sure we can see every remote branch's docs-build.env
              sh 'git fetch --no-tags --force origin "+refs/heads/*:refs/remotes/origin/*"'
              // same version-branch filter as the Multibranch job
              def raw = sh(returnStdout: true, script:
                "git for-each-ref --format='%(refname:short)' refs/remotes/origin " +
                "| sed 's#^origin/##' | grep -E '^(master|[0-9]+([.][0-9]+)?)\$' || true"
              ).trim()
              def branches = raw ? raw.split('\\n') : []
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
            retry(3) { build job: '/Documentation/PurgeCDNIfInValidState', wait: true }
          }
        }
      }
    }
  }

  // Alerting deferred (see Jenkinsfile) — Mailer 'mail' step throws NoSuchMethodError against
  // the installed plugin; rely on the RED build until IT updates it.
  post {
    failure {
      echo 'Nightly Maintenance FAILED — see console output. Automated alerting pending an IT Mailer plugin fix.'
    }
  }
}
