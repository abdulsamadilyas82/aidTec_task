groovy
    pipeline {
        agent any

        stages {
            stage('Checkout') {
                steps {
                    // Checkout code from Git repository
                    git branch: 'master', url: 'https://github.com/abdulsamadilyas82/aidTec_task'
                }
            }
            stage('Build') {
                steps {
                    // Build the Maven project
                    sh 'mvn clean install'
                }
            }
        }
    }
