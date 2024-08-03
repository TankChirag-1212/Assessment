pipeline {
    environment {
        imagename = "chirag1212/full-stack-app"
        frontendDockerImage = ''
        backendDockerImage = ''
        dockerHubCredentials = 'd784ec34-84a6-4363-8d99-5ac8be4a8df8'	
        kubernetes_server_private_ip="192.168.49.2"
        ansible_server_private_ip="localhost"
    }
 
    agent any
 
    stages {
        stage('Fetching Github Repo') {
            steps {
                git([url: 'https://github.com/TankChirag-1212/Assessment.git', branch: 'development'])
            }
        }
 
        stage('Building Frontend Image') {
            steps {
                script {
                    dir('Docker/frontend') {
                        frontendDockerImage = docker.build "${imagename}:frontend_v2"
                    }
                }
            }
        }
         stage('Building backend image') {
            steps {
                script {
                    dir('Docker/order-processing') {
                        backendDockerImage = docker.build "${imagename}:backend"
                    }
                }
            }
        }
        
        stage('Deploy Image') {
            steps {
                script {
                    // Use Jenkins credentials for Docker Hub login
                    withCredentials([usernamePassword(credentialsId: dockerHubCredentials, usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh "docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD"
 
                        // Push the image
                        sh "docker push ${imagename}:frontend_v2"
                        sh "docker push ${imagename}:backend"
                    }
                }
            }
        }
    }
    // stage('Copy files from jenkins to kubernetes server'){
     
    // }
 
    // stage('Kubernetes deployment using ansible'){
    
    // }
     // stage('webapp testing'){
    
    // }
}