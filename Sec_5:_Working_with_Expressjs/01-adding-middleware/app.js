const http = require('http');

const express = require('express');

const rootDir = require('./util/path')

const bodyParser = require('body-Parser');

const app = express();

const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop");
const path = require('path');

app.use(bodyParser.urlencoded({extended:false}))

// for serving static files
app.use(express.static(path.join(__dirname,"public")))

// here also order matters 
// here we are just using the adminRoutes object exported
app.use("/admin",adminRoutes);
// here "/admin" will be added to the path of the adminRoutes middlewares  defaultly.

app.use(shopRoutes);

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(rootDir,"views","404.html"))
})

const server = http.createServer(app);

server.listen(3000);
