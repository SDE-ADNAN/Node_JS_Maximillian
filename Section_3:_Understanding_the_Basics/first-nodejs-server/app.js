const http = require('http') 

// we stored the server into the server variable which is returned by the createServer method on the http module

const server = http.createServer((req,res)=>{
    console.log("request.url -->  "+req.url )
    console.log("request.method -->  "+req.method )
    console.log(req.headers)
    //  here if we use the process.exit() , what it does is that it hard exitted the eventloop which we typically do not do to our server as we want our server to be running .
    // this setHeader sets the type of response we will be giving back in reponse
    res.setHeader('Content-Type','text/html');
    // this res.write() method is used to write the response line by line
    res.write('<html>')
    res.write('<head><title>My first Page</title></head>')
    res.write('<body><h1>Hey !! welcome to nodejs</h1></body>')
    res.write('</html>')
    // once we used the res.end method we now cant use the res.write method or else it will throw unwanted errors.
    res.end()
    // process.exit()
})

// this below line means the server will listen at the (localhost:3000) whenever a new request is gemerated on the port 3000.
server.listen(8080)