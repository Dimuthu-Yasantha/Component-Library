pipeline {
  agent any
  tools {
    nodejs '18.7.0'
  }
  environment {
    AZURE_SUBSCRIPTION_ID='edf942fb-1477-46f8-9448-59d4fcebd4fe'
    AZURE_TENANT_ID='417b98f6-e4a4-4034-b2d3-42624541bec0'
    AZURE_STORAGE_ACCOUNT='staticinstance'
    AZURE_CREDENTIALS = credentials('Azure') // Azure Service Principal credentials ID
    AZURE_STATIC_WEBSITE_CONTAINER = '$web' // Azure Static Website container name
    BUILD_FOLDER = 'storybook-static' // Build folder path
  }
  stages {
    stage('Build') {
      steps {
        sh 'node -v'
        sh 'echo Hello Azure Storage from Jenkins'
        sh 'npm install'
        sh 'npm run build-storybook'
      }

      post {
        success {
          withCredentials([azureServicePrincipal(credentialsId: 'Azure', 
                          passwordVariable: 'AZURE_CLIENT_SECRET', 
                          usernameVariable: 'AZURE_CLIENT_ID')]) {
            sh '''
                #!/bin/bash
                echo "This is start $(pwd)"
                cd ./storybook-static
                echo "This is $(pwd)"
                # Login to Azure
                az login --service-principal -u \${AZURE_CREDENTIALS_USR} -p \${AZURE_CREDENTIALS_PSW} --tenant \${AZURE_CREDENTIALS_TENANT}
                
                # Set Azure subscription
                az account set --subscription \${AZURE_CREDENTIALS_SUBSCRIPTION}
                
                # Create or update resource group
                az group create --name \${AZURE_RESOURCE_GROUP} --location \${AZURE_LOCATION} --output none
                
                # Deploy to Azure
                az webapp up --name \${AZURE_APP_NAME} --resource-group \${AZURE_RESOURCE_GROUP}
            '''
          }
        }
      }
    }
  }
}