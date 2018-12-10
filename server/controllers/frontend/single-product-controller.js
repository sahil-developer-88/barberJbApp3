var frontController = {
    getSingleProductInfo: function(req, res) {
        const bookingProductsSchema = require('../../database/models/bookingProducts.js');
        var productId=req.body.id;
        var productDetails={};
        bookingProductsSchema.findOne({_id: productId},(err,productRecord)=>{
            if(productRecord)
            {
                res.send({productDetails:productRecord});
            }
            else
            {            
                res.send({productDetails:''});
            }    
        });   
    }
}  

module.exports = frontController;   