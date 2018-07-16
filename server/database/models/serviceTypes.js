var mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;


var serviceTypesSchema = new Schema({
    serviceId: Schema.Types.ObjectId,
    serviceTypeName: String,
    image: String,
    price: String,
    timeSlotsDuration: Number,
    createdDate : Number
}, { collection: 'service-types-data' });

var serviceTypesData = mongoose.model('serviceTypesData', serviceTypesSchema);


module.exports = serviceTypesData;