const http = require('http') 

// we stored the server into the server variable which is returned by the createServer method on the http module

const server = http.createServer((req,res)=>{
    console.log(req)
})

// this below line means the server will listen at the (localhost:3000) whenever a new request is gemerated on the port 3000.
server.listen(3000)