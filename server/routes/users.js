 var express   = require('express'),
     bcrypt    = require('bcryptjs'),
     passport  = require('passport'),
     crypto    = require('crypto');

var router    = express.Router();
let User = require('../models/user');


//Register
router.post('/register', function(req, res){
  
    var email = req.body.email;
    var password = req.body.password;
    var password2 = req.body.repassword;
  
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'invalid Email').isEmail();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('repassword', 'Incorrect password').equals(req.body.password);
  
    let errors = req.validationErrors();
  
    if(errors){
      console.log(errors);
      return res.send({error: errors})
    } else {
      let newUser = new User({
        email:email,
        password:password,
      });
  
      bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(newUser.password, salt, function(err, hash){
          if(err){
            console.log(err);
          }
          newUser.password = hash;
          newUser.save(function(err){
            if(err){
              console.log(err);
              return res.send({error: 'please try again.'})
              return;
            } else {
              return res.send({success: 'you are registred!!'})
              }
          });
        });
      });
    }
  });
  //render login form
  router.post('/login', passport.authenticate('local'), function(req, res){
    res.status(200).json({user: req.user._id});
  });