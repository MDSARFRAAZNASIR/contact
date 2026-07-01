// pipeline{
//     agent any

//     enviroment{
//     FRONTEND_IMAGE= "mern-frontend:jenkins"
//     BACKEND_IMAGE= "mern-backend:jenkins"
//     PORT= "5000"
//     MOMGO_URI= "mongodb://mongo:27017/api" 

//     }
     
//      stages {
//         stage('Checkout Code'){
//             steps{
//                 git url: 'https://github.com/MDSARFRAAZNASIR/contact.git', branch: 'master/main'
//             }
//         }
//         stage ('Prepare .env'){
//             steps {
//         sh '''
//         mkdir -p server
//         cat > server/.env <<EOF
//         PORT=$PORT
//         MONGO_URI=$MONGO_URI
//         EOF
//             '''
        
//         }

//         }
//          stage("Build Docker Images "){
//             steps{
//                 sh '''
//                 echo "building backend image..."
//                 docker build -t $BACKEND_IMAGE ./backend

//                 echo "Building frontend image..."
//                 docker build -t $FRONTEND_IMAGE ./frontend  --build-arg REACT_API_URL=http://localhost:5000/api


//                 '''
//             }

//          }

//          stage('Run with docker compose'){
//             steps{
//                 sh'''
//                 echo "Starting MERN app with docker compose..."
//                 docker compose up -d

//                 echo "showing running containers"
//                 docker ps
//                 '''
//             }
//          }
        
//     }
// }


pipeline {
    agent any

    environment {
        FRONTEND_IMAGE = "mern-frontend:jenkins"
        BACKEND_IMAGE  = "mern-backend:jenkins"
        PORT           = "3001"
        MONGO_URI      = "mongodb://mongo:27017/api" 
    }
     
    stages {
        stage('Checkout Code') {
            steps {
                // Change 'main' to 'master' if your repository still uses the old default
                git url: 'https://github.com/MDSARFRAAZNASIR/contact.git', branch: 'main'
            }
        }

        stage('Prepare .env') {
            steps {
                // Using triple double-quotes (""") allows Jenkins to inject the environment variables
                sh """
                mkdir -p server
                cat > server/.env <<EOF
PORT=${PORT}
MONGO_URI=${MONGO_URI}
EOF
                """
            }
        }

        stage('Build Docker Images') {
            steps {
                sh '''
                echo "Building backend image..."
                docker build -t $BACKEND_IMAGE ./backend

                echo "Building frontend image..."
                docker build -t $FRONTEND_IMAGE ./frontend --build-arg REACT_API_URL=http://localhost:3001/api
                '''
            }
        }

        // stage('Run with docker compose') {
        //     steps {
        //         sh '''
        //         echo "Starting MERN app with docker compose..."
        //         docker compose up -d --build

        //         echo "Showing running containers..."
        //         docker ps
        //         '''
        //     }
        // }
     stage('Run with docker compose') {
            steps {
                sh '''
                echo "Starting MERN app with docker compose..."
                
                # Forces Docker Compose to use existing images and completely bypasses Buildx
                docker compose up -d --no-build

                echo "Showing running containers..."
                docker ps
                '''
            }
        }
    }
}