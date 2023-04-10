const http = require('http');

const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log(" This always runs :::: ")
    next();
})

// add-product middleware.
app.use('/add-product',(req, res, next) => {
    console.log('In the products middleware!');
    res.send('<h1 style="color:red;">The add product page </h1>');
});

// root path.
app.use('/',(req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1 style="color:red;">Hello from Express!</h1>');
});

const server = http.createServer(app);

server.listen(3000);
