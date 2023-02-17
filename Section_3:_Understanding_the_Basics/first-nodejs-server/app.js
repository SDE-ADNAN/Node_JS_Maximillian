const http = require('http') 
const fs = require("fs") // for file system access

// we stored the server into the server variable which is returned by the createServer method on the http module

const server = http.createServer((req,res)=>{
 const url = req.url
 const method = req.method


 if(url === '/'){
    res.write('<html>')
    res.write('<head><title>Enter Message</title></head>')
    // the action attr will submit this form and will push the url to domain/message and the method attr will specify the request method as post and the name attr in input is very special as it will append the input value in request.message which we can use to process some further operations.
    res.write('<body><form action="/message" method="POST" ><input name="message" type="text"></input><button>Send</button></form></body>')
    res.write('</html>')
   // we must return here the res.end() as we dont want to continue any further in this function or else it will also continue to run rest of the func.
   return res.end()
 }
 if(url === '/message' && method === 'POST'){
   const body =[];
// this below on data function in called by nodejs when ever it has some thing in the requests data stream and calls this function for each individual chunk of the whole data. 
   req.on('data', (chunk)=>{
     console.log(chunk);
     body.push(chunk);
   })
   // this on end is called when each chunk got processed and at the end it writes to the file.
   return req.on('end',()=>{
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt',message);
         // using the writeFileSync method to create a new file into the system.
         // fs.writeFileSync('message.txt','DUMMY');
         // here using the 302 status code which stands for redirection 
         res.statusCode = 302;
         // here setting the headers location to be home page 
         res.setHeader('Location','/')
         // never forget to return the res.end().
      return res.end();
      })

 }
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