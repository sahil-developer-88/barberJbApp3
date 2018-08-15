var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var promoCodesSchema = new Schema({
    promoCode : String,
    discount : Number,
    startingDate : Number,
    endingDate : Number,
    createdDate : Number,
    modifiedDate : Number
}, { collection: 'promo-codes'});
var promoCodes = mongoose.model('promoCodes', promoCodesSchema);
module.exports = promoCodes;