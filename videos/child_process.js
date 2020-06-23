const path = "C:\\FFMPEG\\bin"

const {spawn} = require("child_process")
const ls = spawn('ls', ['-lh','/usr'])

//Stdout = Saida
ls.stdout.on('data', (data)=>{
    console.log(`Stdout: ${data}`)
})
//Stderr = Error
ls.stderr.on('data', (data)=>{
    console.log(`Stderr: ${data}`)
})

ls.on('close', (code)=>{
    console.log(`Processo em background feito com sucesso:\n Code: ${code}`)
});