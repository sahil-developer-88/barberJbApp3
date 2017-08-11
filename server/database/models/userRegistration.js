var mongoose = require('./connection');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;


var userInfoSchema = new Schema({
    firstName: String,
    lastName: String,
    password: String,
    email: String,
    phoneNumber: String,
    state: String,
    city: String
}, { collection: 'users' });

var userInfoData = mongoose.model('userInfoData', userInfoSchema);


module.exports = userInfoData;