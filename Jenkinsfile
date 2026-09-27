pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/tina-karemore/student-management-devops.git'
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
                echo 'Docker image built successfully. Deployment will use Render.'
            }
        }

        stage('Health Check') {
            steps {
                echo 'Application monitoring/health verification stage'
            }
        }
    }
}