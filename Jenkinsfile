    pipeline {
        agent any

        stages {
            stage('Checkout') {
                steps {
                    // Checkout code from Git repository
                    git branch: 'main', url: 'https://github.com/abdulsamadilyas82/aidTec_task'
                }
            }
            stage('Build') {
                steps {
                    // Build the Maven project
                    bat 'mvn clean install'
                }
            }
        }
    }
