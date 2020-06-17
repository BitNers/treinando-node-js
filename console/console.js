console.log('Exibindo mensagem.');

// Erro.

console.error(new Error('Exibindo erros!'));

const carros = ['GM','FIAT','FORD','VW']

console.table(carros)

const dados = {name:'Wesley', apelido:'Bitners'}

console.table(dados)
console.count('processo')
console.count('processo')
console.count('processo')

console.countReset('processo')

console.count('processo')

console.time('contador')
for (let idx=0; idx < 100; idx++){
   // console.log('-');
}
console.timeEnd('contador')

console.assert(true, 'Faça algo')
console.assert(false,'Ih Rapaz...')

// Limpando a tela de Console
// console.clear()