var mongoose = require('./connection');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;


var paymentSchema = new Schema({
    paymentId: String,
    userId: String,
    bookingServiceId: String,   // services
    bookingProductId: String,    // products
    timeSlot: String,   // services
    bookingDate: String,    // services
    bookingType: Number,    // services
    productQuantity: Number, // products
    serviceOrProductPrice: String, // without booking
    serviceOrProductName: String,  // without booking
    stars: Number,  // products
    review: String, // products
    successStatus: Number, 
    createdDate: String 
}, { collection: 'payment-data'});

var paymentData = mongoose.model('paymentData', paymentSchema);

// bookingServiceId is used as foreign key in this model and it is primary key in serviceTypes model.
// bookingProductId is used as foreign key in this model and it is primary key in products model.

// if bookingType == 1, then record is for service booking.
// if bookingType == 2, then record is for product booking.
// if bookingType == 3, then record is for offline payment.


module.exports = paymentData;