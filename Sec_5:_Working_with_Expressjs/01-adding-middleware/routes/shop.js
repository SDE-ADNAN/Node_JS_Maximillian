const path = require("path");

const express = require("express");

const router = express.Router();

// root path.
router.get('/',(req, res, next) => {
    console.log('In another middleware!');
    res.sendFile(path.join(__dirname,'..','views','shop.html'));
    // args in sendfile above
    // 1. __dirname which is a global variable provided by nodejs for us to avoid OS related path gocchas.
    // 2. '..' this tells to go up one level and then search for views cause we are using this middleware inside the app.js so the path should be relative to that file (app.js). 
    // 3. 'views' name of the directory.
    // 4. 'shop.html' is name of the file.
    // NOTE : here we are not using the / or \ for traversing the file system because in windows we use '\' for traversing and in linux and mac we use '/' for traversing.
});

module.exports = router