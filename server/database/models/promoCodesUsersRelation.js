var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var promoCodesUsersRelationSchema = new Schema({
    promoCodeId : Schema.Types.ObjectId,
    userId : Schema.Types.ObjectId,
    status : Number,
    createdDate : Number,
    modifiedDate : Number
}, { collection: 'promo-codes-users-relation'});
var promoCodesUsersRelation = mongoose.model('promoCodesUsersRelation', promoCodesUsersRelationSchema);
module.exports = promoCodesUsersRelation;