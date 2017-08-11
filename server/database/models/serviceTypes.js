var mongoose = require('./connection');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;


var serviceTypesSchema = new Schema({
    serviceId: String,
    serviceTypeName: String,
    image: String,
    price: String,
    timeSlotsDuration: Number
}, { collection: 'service-types-data' });

var serviceTypesData = mongoose.model('serviceTypesData', serviceTypesSchema);


module.exports = serviceTypesData;