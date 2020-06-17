const {promisify} = require('util');

const writeFile = promisify(require('fs').writeFile);
const cont = `Criando arquivo utilizando o Promisify da API nativa.`

writeFile('utilArquivo.txt', cont).then(()=>{
    console.log('Arquivo Util criado com sucesso.');
}).catch((err)=>{
    console.log(`Deu erro: ${err}`);
});