const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to the home page')    
    }
    if(req.url === '/about'){
        res.end('About us')
    }
    res.end(`
    <h1>Oops</h1>
    <p>Not found</p>
    <a href="/">Back home</a>
    `)
})

server.listen(5000)