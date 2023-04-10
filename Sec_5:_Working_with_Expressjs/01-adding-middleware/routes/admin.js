const express = require('express')

const router = express.Router();

// add-product middleware.
router.get('/add-product',(req, res, next) => {
    console.log('In the add-product middleware!');
    res.send('<form action="/product" method="POST"><input type="text" name="title"></input><button type="submit" >Add Product</button></form>');
});
// product middleware.
// here this will only trigger only for post requests
router.post('/product',(req, res, next) => {
    console.log('In the product middleware!');
    console.log(req.body) // without a body parser this will give undefined
    res.redirect('/');
});

module.exports = router;