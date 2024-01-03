const fs = require('fs');
const path = require('path');

// fs.writeFileSync('./test.txt','hello, node.js')

const distPath = path.resolve(__dirname, '../dist/test.txt');
fs.writeFileSync(distPath,'hello, node.js')
// console.log(__dirname);
console.log(distPath);
// console.log('hello, node.js');
