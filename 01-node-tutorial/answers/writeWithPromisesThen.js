const {writeFile, readFile} = require("fs").promises


writeFile ("./temp.txt", "Hello,") // write line 1  
.then(() => {  
   return writeFile("./temp.txt", " I would like to ", {flag: 'a'})  // write line 2.  
   // Return the promise so you can chain the .then statements  
})  
.then(() => {  
    return writeFile("./temp.txt", "finish this sentence.", {flag: 'a'})  // write line 3.  
     
 })
 .then(() => {  
    return readFile("./temp.txt", "utf-8")  // read file
     
 })
.then((data) => {  
    console.log(data)  // log data  
 })    
.catch((err) => {  
    console.log( err)  
}) 