pipeline {
    agent any

    tools {nodejs "node"}

	stages{
		stage(‘Cypress Parallel Test Suite’){
			parallel {
                stage('Slave Node1'){
                    agent {
                        label "Remote_Node1"
                    } 
                    steps {
                        git url: 'https://github.com/woutje74/cypress-automation-framework.git'
                        sh 'npm install'
                        sh 'npm update'
                        sh 'npm run allAutoStore-tests-dashboard'
                    }
                }
                stage('Slave Node2'){
                    agent {
                        label "Remote_Node2"
                    } 
                    steps {
                        git url: 'https://github.com/woutje74/cypress-automation-framework.git'
                        sh 'npm install'
                        sh 'npm update'
                        sh 'npm run allWebUni-tests-dashboard'
                    }
                }


            }
        }
    }
}