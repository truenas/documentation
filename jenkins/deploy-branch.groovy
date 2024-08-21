pipeline {
    agent { label 'hugo-pr' }

    environment {
        HUGO_ENV = "production"
    }

    parameters {
        gitParameter name: 'BRANCH_NAME',
                     type: 'PT_BRANCH',
                     defaultValue: 'master',
                     description: 'Branch to Build',
                     branchFilter: 'origin/(.*)',
                     selectedValue: 'DEFAULT',
                     sortMode: 'DESCENDING_SMART',
                     useRepository: 'https://github.com/truenas/documentation.git'
        choice(name: 'ENVIRONMENT', choices: ['Dev', 'QA', 'Production'], description: 'Deployment Environment')
        choice(name: 'DEPLOY_PATH', choices: ['root', 'scale', 'core', 'truecommand', 'hardware', 'other'], description: 'Deployment Path')
        string(name: 'CUSTOM_PATH', defaultValue: '', description: 'Custom Path (only if "other" is selected)')
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: params.BRANCH_NAME, url: 'https://github.com/truenas/documentation.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install -D --save autoprefixer'
                sh 'npm install -D --save postcss-cli'
                sh 'hugo -d public --gc --minify --cleanDestinationDir'
                sh 'npx pagefind --site "public" --glob "{api,archive,contributing,core,hardware,references,scale,softwarestatus,solutions,truecommand,truenasupgrades}/**/*.html"'
            }
        }

        stage('Publish') {
            steps {
                script {
                    def deployTarget
                    switch(params.ENVIRONMENT) {
                        case 'Dev':
                            deployTarget = '/var/www/html/docs-dev1'
                            break
                        case 'QA':
                            deployTarget = '/var/www/html/second-internal-demo'
                            break
                        case 'Production':
                            deployTarget = '/var/www/html/docs1'
                            break
                        default:
                            error "Invalid environment selected"
                    }

                    def finalDeployPath
                    switch(params.DEPLOY_PATH) {
                        case 'root':
                            finalDeployPath = deployTarget
                            break
                        case 'scale':
                        case 'core':
                        case 'truecommand':
                        case 'hardware':
                            finalDeployPath = "${deployTarget}/${params.DEPLOY_PATH}/${params.BRANCH_NAME}"
                            break
                        case 'other':
                            if (params.CUSTOM_PATH == '') {
                                error "Custom path is required when 'other' is selected"
                            }
                            finalDeployPath = "${deployTarget}/${params.CUSTOM_PATH}/${params.BRANCH_NAME}"
                            break
                        default:
                            error "Invalid deployment path selected"
                    }

                    sh "rsync -rvza -e 'ssh -i ~/.ssh/id_rsa -o StrictHostKeyChecking=no' --delete --exclude='pdf/' --exclude='PRs/' --exclude='CNAME' --exclude='download/' public/ docs@10.242.64.28:${finalDeployPath}"
                }
            }
        }
    }
}
