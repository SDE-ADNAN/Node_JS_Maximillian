const path =require('path');

const express = require('express');

const router = express.Router();

// add-product middleware.
// /admin/add-product ==> GET
router.get('/add-product',(req, res, next) => {
    console.log('In the add-product middleware!');
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"></input><button type="submit" >Add Product</button></form>');
});
// product middleware.
// here this will only trigger only for post requests
// /admin/add-product ==> POST
router.post('/add-product',(req, res, next) => {
    console.log('In the product middleware!');
    console.log(req.body) // without a body parser this will give undefined
    res.sendFile(path.join(__dirname,'..', 'views', 'add-product.html'));
    res.redirect('/');
});

module.exports = router;