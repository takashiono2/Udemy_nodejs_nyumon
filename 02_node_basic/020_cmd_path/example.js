const fs = require('fs');
const path = require('path');

// fs.writeFileSync('./test.txt','hello, node.js')
// fs.writeFileSync(__dirname + '/test.txt','hello, node.js')
const distPath = path.resolve(__dirname, '../dist/test.txt');
// console.log(__dirname);
console.log(distPath);
// console.log('hello, node.js');
