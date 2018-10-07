var mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
const saltRounds = 10;


var userInfoSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type : String,
        lowercase : true,
        unique : true,
        required : true
    },
    password: {
        type : String,
        required : true
    },
    phoneNumber: String,
    state: String,
    city: String,
    role : {
        type : Number,
        enum : [0,1],            // 0 for users and 1 for admin
        default : 0
    }
}, { collection: 'users' });


// save user's hashed password
userInfoSchema.pre('save', function(next) {
    var user = this;
    const myPlaintextPassword = user.password;
    if(this.isModified('password') || this.isNew) {
        bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
            if(err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    }
    return next();
});

// method to compare password
userInfoSchema.methods.comparePassword = function(pw, cb) {
    bcrypt.compare(pw,this.password,function(err, isMatch) {
        if(err) {
            console.log('comp err');
            return cb(err);
        }
        console.log('isMatch');
        console.log(isMatch);

        cb(null, isMatch); 
    });
}

var userInfoData = mongoose.model('userInfoData', userInfoSchema);


module.exports = userInfoData;