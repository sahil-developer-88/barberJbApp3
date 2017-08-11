var mongoose = require('mongoose');
mongoose.connect('mongodb://jituBarber:barberJb@ds149059.mlab.com:49059/barberjb_db');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("connected");
    // we're connected!
});

module.exports=mongoose;