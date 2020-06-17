console.log('Antes do erro')

function execute(){
    executeTo();
}

function executeTo(){
    throw new Error('Error.')

}

function init(){
    try {
        execute()
    } catch (error) {
        console.log(`erro detectado: ${error.message}`)
    }
}

init()
console.log('Depois do erro.')