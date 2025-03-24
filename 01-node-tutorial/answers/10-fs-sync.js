const { writeFileSync, readFileSync} = require('fs')

writeFileSync('./temporary/fileA.txt' , "This is line one.");
writeFileSync('./temporary/fileA.txt', "This is line two.", { flag: 'a'});
writeFileSync('./temporary/fileA.txt', "Line three!", { flag: 'a'});

const fileA = readFileSync('./temporary/fileA.txt', 'utf8')
console.log(fileA)