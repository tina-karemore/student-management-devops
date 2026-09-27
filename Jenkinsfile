pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Setup Node.js') {
            steps {
                sh '''
                    apt-get update
                    apt-get install -y nodejs npm
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t student-management:latest .'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deployment stage completed'
            }
        }

        stage('Health Check') {
            steps {
                echo 'Health check stage completed'
            }
        }
    }
}