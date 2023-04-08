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

## Installing Express.js

