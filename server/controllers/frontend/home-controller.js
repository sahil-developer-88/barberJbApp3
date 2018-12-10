const _=require("lodash");
var frontController = {
    servicesHomePage: function(req, res) {
        const bookingServiceCategoriesData = require('../../database/models/serviceCategories');
        const bookingServiceTypesData = require('../../database/models/serviceTypes');
        var servicesListing=[];

        bookingServiceCategoriesData.aggregate([
            {
                $project : {
                    _id : 1,
                    title : '$services',
                    // imageUrl : '$servicesData.image',
                    gender : '$gender'
                }
            }
        ],((err,response)=> {
            if(err) {
                return false;
            }
            
            if(response.length > 0) {
                // console.log(response);
                var newData = [];
                response.forEach((data, index) => {
                    bookingServiceTypesData.find({serviceId : data._id},(err,docs)=> {
                        if(err)
                            return;
                        
                        // console.log(`${data._id} ${docs[0].serviceId}`);
                        if((data._id).toString() == (docs[0].serviceId).toString()) {
                            data.imageUrl =  docs[0].image;
                            
                            if(index == response.length-1) {
                                newData.push(data);
                                servicesListing = newData;   
                                res.send(servicesListing);
                            }
                            else {
                                newData.push(data);
                            }
                        }
                        
                    });
                });

                
            }
            else {
                res.send(servicesListing);
            }
            
        })
        
        );
        // bookingServiceCategoriesData.find({},(servicesErr, services)=>{
        //     if(services.length > 0)
        //     {
                
        //         _.forEach(services,(singleService,serviceIndex)=>{
        //             bookingServiceTypesData.findOne({serviceId:singleService._id},(serviceTypeErr,serviceType)=>{
        //                 if(serviceType)
        //                 {
        //                     servicesListing.push({
        //                             id:singleService._id, 
        //                             title:singleService.services,                                 
        //                             imageUrl:serviceType.image, 
        //                             gender:singleService.gender,
        //                             isMouseOver:false 
        //                         });
        //                     if(serviceIndex == services.length-1)
        //                     {
        //                         res.send(servicesListing);
        //                     }                                                    
        //                 }                    
        //             });                
        //         });
        //     }
        //     else
        //     {
        //         res.send(servicesListing);
        //     }
        // });
    },
    productsHomePage: function(req, res) {
        const bookingProductsSchema = require('../../database/models/bookingProducts.js');
        var productsListing=[];
        var productsShowStatus=false;
        bookingProductsSchema.find({},(productsErr,products)=>{
            if(products.length > 0)
            {
                if(products.length > 2)
                {
                    productsShowStatus=true;
                }
                
                _.forEach(products,(singleProduct, singleProductIndex)=>{
                    productsListing.push({
                        id: singleProduct._id,
                        name:singleProduct.name, 
                        image:singleProduct.image, 
                        price: singleProduct.price
                    });
                    if(singleProductIndex == products.length - 1)  
                    {
                        res.send({productsListing: productsListing, productsShowStatus: productsShowStatus});
                    }
                });
            }
            else
            {
                res.send({productsListing: productsListing, productsShowStatus: productsShowStatus});
            }
        });
    }
}

module.exports = frontController;