// require is a special reserved keyword in js which is used to access modules which are made for js applications

const http = require('http') // this will seatch for a module named http
const http = require('./http') // (absolute path) this will seatch for a https.js file in the same directory locally
const http = require('/http') // (relative path) this will seatch for a https.js file in the same directory locally
// three of the above examples auto complete the .js extension by there own 
