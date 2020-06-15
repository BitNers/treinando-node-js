const fs = require("fs");
console.log((process.hrtime()[0]/60).toFixed(5));

const dados = fs.readFile("file.txt", (err, dados)=>{
    if (err) throw err;
    console.log("Lendo arquivo....")
});

console.log("Executando o console após o arquivo.");

console.log((process.hrtime()[0]/60).toFixed(5));
