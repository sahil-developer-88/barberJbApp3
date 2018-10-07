var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var promoCodesUsersRelationSchema = new Schema({
    promoCodeId : Schema.Types.ObjectId,
    userId : Schema.Types.ObjectId,
    status : Number,        // 1 means user corresponds to particular promo code is valid and 0 means user corresponds to particular promo code is invalid
    createdDate : Number,
    modifiedDate : Number
}, { collection: 'promo-codes-users-relation'});
var promoCodesUsersRelation = mongoose.model('promoCodesUsersRelation', promoCodesUsersRelationSchema);
module.exports = promoCodesUsersRelation;