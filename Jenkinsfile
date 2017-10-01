node {
    stage("Checkout scm") {
        checkout scm
    }
    stage("Echo") {
        echo "Hello!"
        sh "npm install"
    }

    stage("Cleanup") {
        deleteDir()
    }
}