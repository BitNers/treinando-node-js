const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const app = express()
const path = require('path')


app.use(bodyParser.urlencoded({extented: true}))

app.get('/', (req,res)=>{
    //res.json({message: 'Bem-Vindo'})
    res.sendFile(__dirname+'/index.html')
})

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'uploads/')
    },
    filename: (req, file, cb)=>{
        cb(null, file.fieldname+'-'+Date.now()+path.extname(file.originalname))
    }
})

const upload = multer({storage})

app.post('/upload', upload.single('arquivo'), (req, res, next)=>{
    const file = req.file
    if(!file){
        const err = new Error("Selecione um arquivo")
        err.httpStatusCode = 400
        return next(err)
    }
    //res.end('Upload feito com exito')
    res.send(file)

});


app.listen(3000, '127.0.0.1', ()=>{
    console.log('Server running.')
})