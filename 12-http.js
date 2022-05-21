const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to our home page')
    }
    if(req.url==='/about'){
        res.end('This is about page')
    }
    
    res.end('The requested page not found');
})

server.listen(5000)