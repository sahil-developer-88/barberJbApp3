var mongoose = require('./connection');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;


var bookingProductsSchema = new Schema({
name: String,
image: String,
price: Number,
createdDate: String    
}, { collection: 'booking-products-data' });
var bookingProductsData = mongoose.model('bookingProductsData', bookingProductsSchema);


module.exports = bookingProductsData;