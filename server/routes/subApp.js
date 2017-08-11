// subapp.js
var express = require('express');
var app = module.exports = express();

console.log(app.req.body.firstName);

res.json('hello');