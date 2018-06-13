const _=require('lodash');
const mongoose = require('mongoose');
var bookingController = {
    getBookedServicesData: function(req, res) {
        const bookingServiceCategoriesData = require('../../database/models/serviceCategories');
        const bookingServiceTypesData = require('../../database/models/serviceTypes');
        const payment = require('../../database/models/payment');
        
    
    
         // const userLoginSchema = require('../database/models/userRegistration');
    
        var paymentDataServices=[];
        
        var paymentDataWithoutBooking=[];
        var details;
        var paymentData;
        // req.session.loginId="594a7053f510150c746d3a0d";
                    // services Records
    
                    // so, user can not redirect to thanks page.
                    // if(req.session.thanks && req.session.thanks == true )
                    // {
                    //     req.session.thanks=false;
                    // }
                    if(req.isAuthenticated())
                    {
                        payment.find({userId:req.user._id,bookingType:1},(paymentDataErr,servicesRecords)=>{
                            // if payment data exists.
                            
                            
                            if(servicesRecords.length > 0)
                            {
        
                                _.forEach(servicesRecords,function(singleServiceRecord, index){
                                        bookingServiceTypesData.findOne({_id:singleServiceRecord.bookingServiceId},(servicesError, servicesResult)=>{                          
                                            bookingServiceCategoriesData.findOne({_id:servicesResult.serviceId},(categoriesError, categories)=>{
                                                
                                                paymentDataServices.push({category:categories.services, service:servicesResult.serviceTypeName, image:servicesResult.image, price:servicesResult.price, timeSlot:singleServiceRecord.timeSlot, duration:servicesResult.timeSlotsDuration, bookingDate:singleServiceRecord.bookingDate, transactionDate:singleServiceRecord.createdDate});
                                                
                                                if(index == servicesRecords.length-1)
                                                {
                                                    details={paymentDataServices};
                                                    res.json(details);
                                                }
                                            });
                                        });                                                            
                                });
                            }
                            else
                            {
                                details={paymentDataServices};
                                res.json(details);
                            }
        
                        });
                    }
                    else
                    {
                        details={paymentDataServices};
                        res.json(details);
                    }
    },
    getBookingAppointmentsData : function(req, res) {
        const serviceCategoriesModel = require('../../database/models/serviceCategories');
        const serviceTypesModel = require('../../database/models/serviceTypes');
        const paymentModel = require('../../database/models/payment');
        var appointmentBookings = [];
        if(req.isAuthenticated()) {
            paymentModel.aggregate([
                {
                    $match : { userId : mongoose.Types.ObjectId(req.user._id) ,  bookingType : 4 }
                },
                {
                    $lookup : {
                        from : "appointment-booking-list",
                        localField : "appointmentId",
                        foreignField : "_id",
                        as : "appointmentBookingData"
                    }
                },
                {
                    $unwind : "$appointmentBookingData"
                },
                {
                    $project : {
                        _id : 0,
                        companyName : "$companyName",
                        bookingDate : "$bookingDate",
                        timeSlot : "$timeSlot",
                        price : "$appointmentBookingData.price",
                        duration : "$appointmentBookingData.duration"
                    }
                }
            ],(err, response) => {
                if(err)
                    return err;
                
                console.log('response', response);
                response.map((records) => {
                    appointmentBookings.push(records);
                });
                res.status(200).send(appointmentBookings);
            });
        }
        

    },
    getBookedProductsData : function(req, res)  {
        
        const payment = require('../../database/models/payment');
        const bookingProducts = require('../../database/models/bookingProducts');
        var paymentDataProducts=[];
        var details;
        // req.session.loginId="594a7053f510150c746d3a0d";

        // so, user can not redirect to thanks page.
        if(req.session.thanks && req.session.thanks == true )
        {
            req.session.thanks=false;
        }

        payment.find({userId:req.session.loginId,bookingType:2},(productsDataErr,productsRecords)=>{
                        // if payment data exists.
            if(productsDataErr)                
            {
                console.log('products Data Err');
                return false;
            }
                            
            if(productsRecords.length > 0)
            {
                _.forEach(productsRecords,function(singleProductRecord, index){
                    bookingProducts.findOne({_id:singleProductRecord.bookingProductId},(bookingProductError, bookingProductResult)=>{
                        var totalPrice=parseInt(bookingProductResult.price) * parseInt(singleProductRecord.productQuantity);           
                        paymentDataProducts.push({name:bookingProductResult.name, image:bookingProductResult.image, price:bookingProductResult.price, quantity:singleProductRecord.productQuantity, totalPrice: totalPrice, purchaseDate:singleProductRecord.createdDate});
                        if(index == productsRecords.length-1)
                        {
                            details={paymentDataProducts};
                            res.json(details);
                        }
                    });            
                });

            }
            else
            {
                details={paymentDataProducts};
                res.json(details);
            }
        });
    },
    getWithoutBookingData : function(req, res)  {
        const payment = require('../../database/models/payment');
        const bookingProducts = require('../../database/models/bookingProducts');
        var paymentDataWithoutBooking=[];
        var details;
        // req.session.loginId="594a7053f510150c746d3a0d";
        // so, user can not redirect to thanks page.
        if(req.isAuthenticated()) {
            payment.find({userId:req.user._id,bookingType:3},(noBookingDataErr,noBookingRecords)=>{
                // if payment data exists.
                if(noBookingDataErr)                
                {
                    console.log('products Data Err');
                    return false;
                }
                                
                if(noBookingRecords.length > 0)
                {
                    _.forEach(noBookingRecords,function(singleNoBookingRecord, index){                           
                    paymentDataWithoutBooking.push({name:singleNoBookingRecord.serviceOrProductName, price:singleNoBookingRecord.serviceOrProductPrice, transactionDate:singleNoBookingRecord.createdDate}); 
                        if(index == noBookingRecords.length-1)
                        {
                            details={paymentDataWithoutBooking};
                            res.json(details);
                        }                       
                    });
    
                }
                else
                {
                    details={paymentDataWithoutBooking};
                    res.json(details);
                }
            });
        }


        
    }
}

module.exports = bookingController;