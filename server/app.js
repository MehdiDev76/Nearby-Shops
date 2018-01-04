var express          = require('express')
    mongoose         = require('mongoose')
    path             = require('path')
    bodyParser       = require('body-parser')
    cors             = require('cors')
    expressValidator = require('express-validator')
    session          = require('express-session')
    passport         = require('passport')
    
    
    

var app = express()

// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(cors())












app.listen(3000, function(){
    console.log('Server has started!!!'+ 3000);
  })
  //use process.env.PORT
