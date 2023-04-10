const express = require("express");

const router = express.Router();

// root path.
router.get('/',(req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1 style="color:red;">Hello from Express!</h1>');
});

module.exports = router