const EventEmitter = require('events')

class Evento extends EventEmitter {}
const meuEvento = new Evento();

meuEvento.on('Segurança', (x,y)=>{
    console.log(`Executando o evento: ${x} e ${y}.`);
});

meuEvento.emit('Segurança', 'userAdmin','Salario');