const express = require('express');
const router  = express.Router();
const bcrypt  = require('bcryptjs');
const geolib  = require('geo-lib')

let Shop = require('../models/shop');
let User = require('../models/user');