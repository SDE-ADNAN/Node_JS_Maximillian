const http = require('http');

const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log(" This always runs :::: ")
    next();
})

// add-product middleware.
app.use('/add-product',(req, res, next) => {
    console.log('In the add-product middleware!');
    res.send('<form action="/product" method="POST"><input type="text" name="title"></input><button type="submit" >Add Product</button></form>');
});
// product middleware.
app.use('/product',(req, res, next) => {
    console.log('In the product middleware!');
    console.log(req.body) // without a body parser this will give undefined
    res.redirect('/');
});

// root path.
app.use('/',(req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1 style="color:red;">Hello from Express!</h1>');
});

const server = http.createServer(app);

server.listen(3000);
