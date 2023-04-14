const fs = require("fs") // for file system access

const requestHandler=(req,res)=>{
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
          fs.writeFile('message.txt',message,(err)=>{
             res.statusCode = 302;
             res.setHeader('Location','/')
             return res.end();
          });
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
}

// this will make the requestHandler function available whereever it is required
// module.exports = requestHandler

// OR OR OR
module.exports = {
    handler:requestHandler,
    someText:"Adnan"
}

// OR OR OR
// module.exports.handler=requestHandler;
// module.exports.someText = "Adnan";

// OR OR OR
// exports.handler=requestHandler;
// exports.someText = "Adnan"
