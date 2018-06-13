var mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;


var appointmentBookingListSchema = new Schema({
duration: Number,
price: Number
}, { collection: 'appointment-booking-list' });
var appointmentBookingListData = mongoose.model('appointmentBookingListData', appointmentBookingListSchema);
module.exports = appointmentBookingListData;