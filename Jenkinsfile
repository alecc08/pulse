node {
    stage("Checkout scm") {
        checkout scm
    }
    stage("Npm install") {
        echo "Installing!"
        sh "npm install"
    }

    stage("Cleanup") {
        deleteDir()
    }
}