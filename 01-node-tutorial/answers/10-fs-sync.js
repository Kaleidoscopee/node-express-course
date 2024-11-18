const { readFileSync, writeFileSync } = require('fs')

writeFileSync('./temporary/fileA.txt', 'I am working on learning Node. ');
writeFileSync('./temporary/fileA.txt', 'I am learning a lot. ', { flag: 'a'});
writeFileSync('./temporary/fileA.txt', 'I will be done with this assignment soon.',  { flag: 'a'});

const fileA = readFileSync('./temporary/fileA.txt', 'utf8')
console.log(fileA)
