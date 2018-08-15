var mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;


var paymentSchema = new Schema({
    paymentId: String,
    userId: Schema.Types.ObjectId,
    bookingServiceId: Schema.Types.ObjectId,   // services
    bookingProductId: String,    // products
    appointmentId : Schema.Types.ObjectId,     // appointment
    timeSlot: String,   // services
    bookingDate: String,    // services
    bookingType: Number,    // services
    productQuantity: Number, // products
    serviceOrProductPrice: Number, // without booking
    serviceOrProductName: String,  // without booking
    companyName : String,   // appointment
    description : String,   // appointment
    stars: Number,  // products
    review: String, // products
    successStatus: Number, 
    promoCodeId : Schema.Types.ObjectId,   // promo code id for discount
    paymentType : {
        type : Number,
        enum : [0,1]        // 0 for online banking and 1 for cash payment
    },
    finalAmount : {
        type : Number
    },
    createdDate: Number 
}, { collection: 'payment-data'});

var paymentData = mongoose.model('paymentData', paymentSchema);

// bookingServiceId is used as foreign key in this model and it is primary key in serviceTypes model.
// bookingProductId is used as foreign key in this model and it is primary key in products model.

// if bookingType == 1, then record is for service booking.
// if bookingType == 2, then record is for product booking.
// if bookingType == 3, then record is for offline payment.


module.exports = paymentData;