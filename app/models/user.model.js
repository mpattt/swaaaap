const mongoose  = require('mongoose');
const crypto = require('crypto');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
      type: String,
      unique: true,
      required: 'Username is required',
      trim: true
    },
    password: {
      type: String,
      validate: [
        (password) => { return password && password.length>=1; },
        'Password cannot be empty'
      ]
    },
    firstname: String,
    lastname: String,
    email: { type: String, unique: true },
    address:{type: String},
    phone:{type: String},
    profileimage: String,
    status: {
      type: String,
      default: 'user'
    },
    created: {
      type: Date,
      default: Date.now
    },
    credit: {
      type: Number,
      default: 0
    },
    salt: {
      type: String
    },
    provider: {
      type: String,
      default : 'local'
    },
    providerId: String,
    providerData: {}
});

UserSchema.pre('save', function(next){//hash password
    if (this.password) {
           this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
           this.password = this.hashPassword(this.password);
    }
    next();
});

UserSchema.methods.hashPassword = function(password){
    return crypto.pbkdf2Sync(password, this.salt, 10000, 64,'sha512').toString('base64');
}


UserSchema.methods.authenticate = function(password) {
    return this.password === this.hashPassword(password);
}

UserSchema.statics.findUniqueUsername = function(username, suffix, callback){
    var _this = this;
    var possibleUsername = username + (suffix || '');
    _this.findOne({
               username: possibleUsername
    }, (err, user) => {
               if (!err) {
                      if (!user) callback(possibleUsername);
                      else {
           return _this.findUniqueUsername(username, (suffix || 0) + 1, callback );
                      }
               }
               else {
                      callback(null);
               }
    });
}


mongoose.model('User', UserSchema);
