# 24 : Module Introduction

# what all we will be learning in this module 

1. How does the web works (refresher) ?
2. creating a Node js server.
3. Using node core modules.
4. working with request and responses (Basic).
5. Asynchronous code and the Event loop.

---
# 25 : How the web works ?
this below is the image from the course itself.
![alt text](./imgs/how_the_web_works.jpeg)

### what are the HTTP and HTTPS protocols

1. hyper text transfer protocol ==> it is understood by the browser and is the set of rules that construct the way a request must be made.
2. hyper text transfer protocol secure ==> it is same as the HTTP but with Data encryption (during data transmission)

---

# 26 : Creating a node server

1. created a nodejs server at first-nodejs-server folder
2. below , these are the core nodejs modules

   http ----> is used to launch a server and send requests.

   https ---> is used to launch a ssl encrypted server

   fs ------> is used to access the file system of the machine on which the server is running

   path ----> is used to set paths of files and many other things like images and icons.

   os ------> is used to have access to the operating system of the machine on which the server is up and running

3. 
```js
// require is a special reserved keyword in js which is used to access modules which are made for js applications

const http = require('http') // this will seatch for a module named http
const http = require('./http') // (absolute path) this will seatch for a https.js file in the same directory locally
const http = require('/http') // (relative path) this will seatch for a https.js file in the same directory locally
// three of the above examples auto complete the .js extension by there own 

```
