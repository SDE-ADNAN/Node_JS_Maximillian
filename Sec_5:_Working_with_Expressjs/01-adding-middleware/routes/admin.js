const path =require('path');

const rootDir = require('../util/path')

const express = require('express');

const router = express.Router();

// add-product middleware.
// /admin/add-product ==> GET
router.get('/add-product',(req, res, next) => {
    console.log('In the add-product middleware!');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});
// product middleware.
// here this will only trigger only for post requests
// /admin/add-product ==> POST
router.post('/add-product',(req, res, next) => {
    console.log('In the product middleware!');
    console.log(req.body) // without a body parser this will give undefined
    res.redirect('/');
});

module.exports = router;