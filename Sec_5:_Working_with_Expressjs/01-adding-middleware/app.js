const http = require('http');

const express = require('express');

const bodyParser = require('body-Parser');

const app = express();

const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")

app.use(bodyParser.urlencoded({extended:false}))

// here also order matters 
// here we are just using the adminRoutes object exported
app.use("/admin",adminRoutes);
// here "/admin" will be added to the path of the adminRoutes middlewares  defaultly.

app.use(shopRoutes);

app.use((req, res, next)=>{
    res.status(404).send("<h1 style='color:#fe0000c7;'> Page not found </h1>")
})

const server = http.createServer(app);

server.listen(3000);
