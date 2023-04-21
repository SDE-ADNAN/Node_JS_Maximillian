const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// this below line will set the templating engine as pug // config item
app.set('view engine','pug');
// this line will use the views folder as the dir where it will find all the pug files.
app.set('views','views')

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.render("404")
});
console.warn(`Running at : ${port}`)
app.listen(port);
