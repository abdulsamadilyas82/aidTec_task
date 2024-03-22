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
                    withMaven(maven: "Maven42") {
                    bat 'mvn -f C:\ProgramData\Jenkins\.jenkins\workspace\Pipeline\pom.xml clean install'
                    }
                }
            }
        }
    }
