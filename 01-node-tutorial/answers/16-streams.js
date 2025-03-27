const { createReadStream } = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
let counter = 0

const stream = createReadStream('../content/big.txt', {
    highWaterMark:200, 
    encoding: 'utf8',
})

stream.on('data', (result) => {
    counter++
  console.log(result)
})

stream.on('end', ()=> {
    console.log(`The amount is: ${counter}`)
})

stream.on('error', (err) => console.log(err))