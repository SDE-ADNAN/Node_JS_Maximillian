const http = require('http') 

const routes = require('./routes')


// we stored the server into the server variable which is returned by the createServer method on the http module

// if routes is an object exported.
const server = http.createServer(routes.handler)
// or else if its a single value.
// const server = http.createServer(routes)

// this below line means the server will listen at the (localhost:3000) whenever a new request is gemerated on the port 3000.
server.listen(8080)