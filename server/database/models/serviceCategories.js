var mongoose = require('./connection');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;


/* var categoriesSchema = new Schema({
    _id: Number,
    gender: String,
    services: String    
}, {_id: false, collection: 'categories-data'}); */
var categoriesSchema = new Schema({
    gender: String,
    services: String    
}, { collection: 'categories-data'});

var categoriesData = mongoose.model('categoriesData', categoriesSchema);

// categoriesData.options.toObject.retainKeyOrder=true;

module.exports = categoriesData;