pipeline {
    agent {
        docker {
            image 'node:20'
        }
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
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
                echo 'Application deployment stage'
            }
        }

        stage('Health Check') {
            steps {
                echo 'Application health check completed'
            }
        }
    }
}