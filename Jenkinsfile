pipeline {

    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/yashkale402/Node.js-App-with-TF.git', branch: 'main'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t node-app .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker rm -f node-container || true

                docker run -d \
                --name node-container \
                -p 3000:3000 \
                node-app
                '''
            }
        }
    }
}