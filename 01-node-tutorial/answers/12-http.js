const http = require('http')

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.end('Hello, I love learning Node' )
    }
    if (req.url === '/about') {
        res.end(`My name is Jose and I'm learning Node` )
    }
    res.end(`
        <h1><b>Sorry</b></h1>
        <p>We may have lost connection or link is invalid.</p>
        <a href="/">Back home</a>
        `)
});

server.listen(3000);