const {EventEmitter} = require('events')

class Evento extends EventEmitter {}
const meuEvento = new Evento();

// Subscriber - Assinante
meuEvento.on('Segurança', (x,y)=>{
    console.log(`Executando o evento: ${x} e ${y}.`);
});


// Publisher - Emissor
meuEvento.emit('Segurança', 'userAdmin','Salario'); 

meuEvento.on('Encerrar', (data)=>{
    console.log('Assinante: '+data)
})

meuEvento.emit('Encerrar','Encerrando a execução.')