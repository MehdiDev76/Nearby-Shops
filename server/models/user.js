var mongoose        = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator')

// User Schema
var UserSchema = mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  preferredShops: [],
  dislikedShops: []
});

UserSchema.plugin(uniqueValidator)

var User = module.exports = mongoose.model('User', UserSchema);