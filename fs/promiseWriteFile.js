const {writeFile} = require('fs')

function criaArquivo(name, content){
    return new Promise((res, rej)=>{
        writeFile(name, content, err=>{
            if(err) return rej(err)
            res();

        })
    })
}


criaArquivo('promiseArquivo.txt', 'Criando um arquivo utilizando promises.')
.then(()=>{console.log("Arquivo criado.")})
.catch(err => console.log(err));