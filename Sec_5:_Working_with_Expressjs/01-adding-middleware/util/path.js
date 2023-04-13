const path = require("path");
// console.log("///////////////////////")
// console.log(require.main.filename)

// this require.main.filename gives the relative path to this projects app.js file
module.exports = path.dirname(require.main.filename)