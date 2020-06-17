const path = require('path')

console.clear()
console.log(path.basename('C:\\Users'))
console.log('normalize: '+path.normalize('C:\\Users/nerda'))

console.log('join path:', path.join('/test','teste2','teste3/teste4','dir2', '.'))

console.log('resolve', path.resolve('path.js'))

console.log('extension', path.extname('path.js'))