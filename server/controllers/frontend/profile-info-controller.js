var mongoose = require('mongoose');
var frontController = {
    getLoginInfoAndBookingInfo: function(req, res) {
        const userRegistrationSchema = require('../../database/models/userRegistration');
        const bookingServiceTypesData = require('../../database/models/serviceTypes');
        const bookingProducts = require('../../database/models/bookingProducts');
        const bookingAppointment = require('../../database/models/appointmentBookingList');
        console.log('req.user');
        console.log(req.user);
        // var loginSessionId=req.session.loginId;
        var data=[];
        var userLoginDetails = req.user;
    
        // userRegistrationSchema.find({_id:loginSessionId},(error, userData)=>{
        //     if(error)
        //     {
        //         res.status(500).send(error);
        //         return false;
        //     }
            // bookingType = 1 for service booking
            if(req.body.bookingType == 1)
            {
                var id=req.body.serviceType;
                bookingServiceTypesData.find({_id:id},(serviceTypeError, serviceTypeData)=>{
                    if(serviceTypeError)
                    {
                        console.log(serviceTypeError);                
                    }
                    // console.log('servicetypes');
                    // console.log(userData);
                    data={userData:userLoginDetails, serviceOrProductData:serviceTypeData};
                    // console.log(serviceTypeData);
                    res.send(data);
                });
            }
            else if(req.body.bookingType == 2)
            {
                // bookingType = 2 for product booking
                bookingProducts.find({_id:req.body.productId},(productError, productData)=>{
                    if(productError)
                    {
                        console.log(productError);
                        res.send(productError); 
                        return false;
                    }
                    console.log('products');
                    console.log(productData);
                    data={userData:userLoginDetails, serviceOrProductData:productData};
                    // console.log(serviceTypeData);
                    res.send(data);
                });
            }
            else if(req.body.bookingType == 4)
            {
                bookingAppointment.aggregate([
                    {
                        $match : {
                            _id : mongoose.Types.ObjectId(req.body.appointmentId)
                        }                    
                    }
                ],(err, response) =>
                {
                    console.log('response');
                    console.log(response);
                    data={userData:userLoginDetails, serviceOrProductData:response};
                    res.status(200).send(data);
                    
                });
            }
            else
            {
                if(req.body.bookingType == 3)
                {
                    data={userData:userLoginDetails, serviceOrProductData:[]};                
                    res.send(data);
                }
    
            }
            
            
            
//        });
    },
    payment : function(req,res) {
        console.log('data under payment is coming');
        const userDetailsSchema = require('../../database/models/userRegistration');
        const paymentSchema = require('../../database/models/payment');
        const moment = require('moment');
        var Razorpay=require('razorpay');
        var paymentId=req.body.paymentId;
        var phoneNumber=req.body.phoneNumber;
        var state=req.body.state;
        var city=req.body.city;
        var bookingType=req.body.bookingType;
        var promoCodeId = req.body.promoCodeId;
        var loginSessionId=req.user._id;
        var instance = new Razorpay({
            key_id: 'rzp_test_xTVYVlOmAgyUyO',
            key_secret: 'jzbSVLzCEIS8pU5fKM8htDco'
        });
        var price;
        var paymentType = 0;  // This variable will be used when offline payment is done.
        if(bookingType == 3)
        {
            price=parseInt(req.body.price)*100;
        }
        else
        {
            price=req.body.price;
        }
        
        if(paymentId) {
            instance.payments.capture(paymentId, price);
        }
        else {
            paymentType = 1;
            paymentId = null;
        }
        
        // update profile details
         var conditions = { _id: loginSessionId }
      , update = { phoneNumber: phoneNumber, state: state, city: city }
      , options = { multi: true };
    
      userDetailsSchema.update(conditions, update, options, function(err,numAffected){
          
          if(numAffected.ok == 1)
          {
              
              var date=new Date();
              // var todayDate=date.getDate()+'/'+(parseInt(date.getMonth())+1)+'/'+date.getFullYear();
              // var todayDateFormat = moment().format();
              var todayDate = moment().unix();
              if(bookingType == 1)
              {
                console.log('promoCodeId');
                console.log(promoCodeId);
                var paymentData=new paymentSchema({paymentId: paymentId, userId: loginSessionId, bookingServiceId: req.body.serviceId, bookingDate: req.body.bookingDate, timeSlot: req.body.timeSlot, successStatus:1, createdDate:todayDate, bookingType: bookingType, promoCodeId : promoCodeId });
                paymentData.save().then(function(savedPaymentData) {
                    console.log('saved successfully');
                    req.session.thanks=true;
                    // res.json(paymentId);
                    res.send({paymentTabId:''});
                }); 
              }
                else if(bookingType == 2)
                {
                    var paymentData=new paymentSchema({paymentId: paymentId, userId: loginSessionId, bookingProductId: req.body.productId, successStatus:1, createdDate:todayDate, bookingType: bookingType, productQuantity: req.body.quantity, stars: -1, review: '', promoCodeId : promoCodeId });
                    paymentData.save().then(function(savedPaymentData) {
                    req.session.thanks=true;
                    res.send({paymentTabId:savedPaymentData._id});
                    });
                }
                else if(bookingType == 4)
                {
                    price=parseInt(price)/100;
                    var paymentData=new paymentSchema({paymentId: paymentId, userId: loginSessionId, appointmentId: req.body.appointmentId, companyName : req.body.companyName, description : req.body.description, bookingDate: req.body.bookingDate, timeSlot: req.body.timeSlot, successStatus:1, createdDate:todayDate, bookingType: bookingType, promoCodeId : promoCodeId });
                    paymentData.save().then(function(savedPaymentData) {
                        req.session.thanks=true;
                        res.status(200).send({paymentTabId:savedPaymentData._id});
                    });
                }
                else
                {
                    if(bookingType == 3)
                    {
                        price=parseInt(price)/100;
                        
                        var paymentData=new paymentSchema({paymentId: paymentId, userId: loginSessionId, serviceOrProductPrice: req.body.price.toFixed(2), serviceOrProductName:req.body.serviceOrProductName, successStatus:1, createdDate:todayDate, bookingType: bookingType, paymentType : paymentType, promoCodeId : promoCodeId });
                        paymentData.save().then(function(savedPaymentData) {
                            req.session.thanks=true;
                            // res.json(paymentId);
                            res.send({paymentTabId:''});
                        });
                    }
                }
              
                
          }
      });
    }
}

module.exports = frontController;