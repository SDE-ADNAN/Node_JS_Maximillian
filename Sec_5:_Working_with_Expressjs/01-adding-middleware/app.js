const http = require('http');

const express = require('express');

const bodyParser = require('body-Parser');

const app = express();

const adminRoutes = require("./routes/admin")

app.use(bodyParser.urlencoded({extended:false}))

// here also order matters 
// here we are just using the adminRoutes object exported
app.use(adminRoutes);

// root path.
app.use('/',(req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1 style="color:red;">Hello from Express!</h1>');
});

const server = http.createServer(app);

server.listen(3000);
