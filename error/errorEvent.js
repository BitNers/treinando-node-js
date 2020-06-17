const {EventEmitter} = require('events');
const emitter = new EventEmitter()

const validaObjeto = (a)=>{
    if(typeof a !== 'object'){
        emitter.emit('error', new Error('Tipo inválido'))
    }else{
        console.log("Formato OK")

    }
}

emitter.addListener('error', (err)=>{
    console.log('Evento: ', err.message)
})


// Tipo inválido => Irá cuspir um erro.
    validaObjeto('123')

//Tipo Válido => Irá cuspir uma mensagem de OK.
let dados = {name:'Hcode', course: 'NodeJS'}
    validaObjeto(dados)