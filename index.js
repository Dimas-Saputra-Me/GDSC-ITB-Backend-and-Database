var express = require('express');  
var bodyParser = require("body-parser");  
var app = express();  
app.use(function (req, res, next) {  
res.header("Access-Control-Allow-Origin", "*");  
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');  
next();  
});  
app.use(bodyParser.urlencoded({ extended: true }));  
const ProfileData = require('./controller/profile')  
app.use('/', ProfileData)  
app.listen(5000, function () {  
console.log('Server is running..');  
});