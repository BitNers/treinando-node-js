const {writeFile} = require('fs')



writeFile("arquivo.txt", 'Criando Arquivo de Texto', err=>{
    if(err) throw err;
    console.log("Arquivo criado!");
});