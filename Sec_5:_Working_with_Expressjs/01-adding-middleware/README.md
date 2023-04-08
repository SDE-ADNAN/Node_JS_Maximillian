# Section 5 : Working with Express.js

## 57 : Module Intro 

-  just explained about express and why are we using express ( because it reduces the boilerplate code that we write while working with nodejs).

---
## 58: What is Express Js ?

- writing server logic using node is very complex to write as we have to use this below code snippet for just getting ( parsing the input recieved from an incomming request ).
```JS
const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    //////////////////////
    // we have to do all this from 32nd line all the way till 40th line for just parsing the user input.
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, err => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
};
```
- so while developing a server application we need to focus on the business logic and not in the nitty-gritty details or else it would take eternity to complete the application.
- so for overcoming that issue we use a framework named expressJs which has the ability to heavy-lift the tasks so that we only focus on writing our business logic.
- a framework is basically a package of helper functions and tools and also rules to develop your application.
- alternatives to expressjs : vanilla nodejs , Adonis js , Koa , Sails.js,etc etc.

---

## 59 : Installing Express.js

- we will need to install express using the below command 
```shell
// --save and not --save-dev because this is not a tool that we will just need while we develop our application locally but w'll also need it while it is deployed onto a server.
npm install --save express
```
- here i had used the project provided by max in the state where he already used express and made the server respond to the incoming request and also return a h1 with some text.
- here is the app
```js

// step 1 {import http}
const http = require('http');

// step 2 { import express}
const express = require('express');
// Step 3 { call the express import like express() and store it in an app variable}
const app = express();

// step4 { define a middleware}
// this app.use() method is used to add a middleware in express and is used to 
app.use((req, res, next) => {
    console.log('In the middleware!');
    next(); // Allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1 style="color:red;">Hello from Express!</h1>');
});

// step 5 { pass the app variable to the http.createServer() method }
const server = http.createServer(app);
// step 6 { then declare the port where you want your app to be accessible }
server.listen(3000); // port to listen
```
---

## 60: Adding middleware.