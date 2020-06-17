const fs = require('fs');
const assets = ['css','js', 'fonts', 'lib','images']

function make(dir){

   dir.forEach((item)=>{
    fs.mkdir(`projeto/assets/${item}`,{recursive:true},(err)=>{
        if (err) throw err;
        console.log('Diretorio criado com êxito.');
    });
   }) 
  
}

make(assets)
