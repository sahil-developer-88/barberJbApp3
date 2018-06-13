var frontController = {
    getProductDetails: function(req, res) {
        const bookingProductsSchema = require('../../database/models/bookingProducts.js');    
        bookingProductsSchema.find({},(err,docs)=>{
            console.log('product details');        
            res.send(docs);
        }); 
    }
}

module.exports = frontController;