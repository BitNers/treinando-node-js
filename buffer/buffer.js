const Buffer = require('buffer').Buffer
const buf = Buffer.from('Aprendendo JS')


console.log(buf) // Hexadecimais
console.log(buf.toString()) // Converte em String legíveis
console.log(buf.toString('utf16le')) // Converte para outros códigos de formatação

const buf_string = Buffer.from('Loading a String','utf-8') // Podemos carregar em Buffer já o tipo de codificação que desejamos usar.

console.log(buf_string.toString())
console.log(buf_string.toString('utf-8', 0,5)) // Irá fazer um substring da posição zero até a sexta posição

console.log(Buffer.isBuffer(buf_string)) // Verifica se é um Buffer ou não.