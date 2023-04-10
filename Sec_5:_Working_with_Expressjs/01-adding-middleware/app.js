const http = require('http');

const express = require('express');

const bodyParser = require('body-Parser');

const app = express();

const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")

app.use(bodyParser.urlencoded({extended:false}))

// here also order matters 
// here we are just using the adminRoutes object exported
app.use(adminRoutes);

app.use(shopRoutes);

const server = http.createServer(app);

server.listen(3000);
