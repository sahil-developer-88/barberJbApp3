const _=require('lodash');
var frontController = {
    serviceCategorySelection: function(req, res) {
        const bookingServiceCategoriesData = require('../../database/models/serviceCategories');
        const bookingServiceTypesData = require('../../database/models/serviceTypes');
        const userLoginSchema = require('../../database/models/userRegistration');
        const payment = require('../../database/models/payment');
    
    /*  bookingServiceCategoriesData.remove({}, function (err) {
           console.log('collection removed for bookingServiceCategoriesData model');
        }).exec();   
        bookingServiceTypesData.remove({}, function (err) {
           console.log('collection removed for bookingServiceTypesData model');
        }).exec();
        payment.remove({}, function (err) {
           console.log('collection removed for bookingServiceTypesData model');
        }).exec();
        return false;  */
    
       // const userLoginSchema = require('../database/models/userRegistration');
        // gender 1 for girl and 2 for boy
    
    // const payment = require('../database/models/payment');
    /* var conditions = { serviceId: '5948dd3c7be561156caf918d' }
      , update = { bookingDate: '/30/2017' }
      , options = { multi: true };
    
      payment.update(conditions, update, options, function(err,numAffected){
          
          if(numAffected.ok == 1)
          {
    
          }
      }); */
     /* payment.find({},(err,docs)=>{
        console.log('payment data');
        console.log(docs);
      }); 
      */
    /* const payment = require('../database/models/payment');
    bookingServiceTypesData.find({},(err,docs)=>{
        console.log(docs);
    });
    return false; */
    /* payment.remove({bookingServiceId:'5948dd3c7be561156caf918d'}, function (err) {
            console.log('collection removed for bookingServiceCategoriesData model');
         }).exec(); 
    
    return false;  */
    
    
        var services = [
            { _id: 0, gender: '1', services: 'ear pearcing' },
            {  _id: 1, gender: '1', services: 'nose pearcing' },
            {  _id: 2, gender: '1', services: 'massage' },
            {  _id: 3, gender: '1', services: 'stratening' },
            {  _id: 4, gender: '2', services: 'hairstyle' },
            {  _id: 5, gender: '2', services: 'tatoo' },
            {  _id: 6, gender: '2', services: 'makeup' },
            {  _id: 7, gender: '2', services: 'appointment' }        
        ];
    
    
        var serviceTypeNames = ['ear pearcing1', 'nose pearcing1', 'massage1', 'stratening1', 'hairstyle1', 'tatoo1', 'makeup1', 'appointment1'];
        var serviceImages = ['/assets/images/sliderImg1.jpg', '/assets/images/sliderImg2.jpg', '/assets/images/sliderImg3.jpg', '/assets/images/sliderImg1.jpg', '/assets/images/sliderImg2.jpg', '/assets/images/sliderImg3.jpg', '/assets/images/sliderImg1.jpg', '/assets/images/sliderImg2.jpg'];
        var servicePrices = ['1', '1', '1', '1', '1', '1', '1', '1'];
        var timeSlots=['15','30','45','60','120','60','60','120'];
    
        
        // bookingServiceCategoriesData.remove({}, function (err) {
        //    console.log('collection removed for bookingServiceCategoriesData model');
        // }).exec();   
        // bookingServiceTypesData.remove({}, function (err) {
        //    console.log('collection removed for bookingServiceTypesData model');
        // }).exec();
        // return false;  
        
    
        var details=[];
        var paymentData=[];
        // details.userDetailsData={};
        // get content of hairstyleData 
        bookingServiceCategoriesData.find({}, (err, servicesCategories) => {
            if (servicesCategories.length > 0) {
                // if(req.session.loginId)
                // {                                                                
                   // get user details by session login id.
                //    userLoginSchema.find({_id:req.session.loginId}, (userDetailsError,userDetails)=>{
                //         if(userDetailsError)
                //         {
                //             // error 
                //             console.log(userDetailsError);
                //             return false;
                //         }
                    
                        // details={servicesCategoriesData:servicesCategories};                                        
                        // //     // console.log(details);
                        // res.send(details);
    
                    // console.log(userDetails);
                    // payment.find({userId:req.session.loginId, bookingType: 1},(paymentDataErr,paymentRecords)=>{
                    //     // if payment data exists.
                    //     if(paymentRecords.length > 0)
                    //     {
                    //         _.forEach(paymentRecords,function(paymentSingleRecord, index){
                    //             bookingServiceTypesData.findOne({_id:paymentSingleRecord.bookingServiceId},(servicesError, servicesResult)=>{       
                    //                 bookingServiceCategoriesData.findOne({_id:servicesResult.serviceId},(categoriesError, categories)=>{
                    //                     paymentData.push({category:categories.services, service:servicesResult.serviceTypeName, image:servicesResult.image, price:servicesResult.price, timeSlot:paymentSingleRecord.timeSlot, duration:servicesResult.timeSlotsDuration, bookingDate:paymentSingleRecord.bookingDate});
                                        
                    //                     if(paymentData.length == paymentRecords.length)
                    //                     {
                    //                         details={userDetailsData:userDetails,servicesCategoriesData:servicesCategories, paymentData: paymentData};
                                            
                    //                         console.log(details);
                    //                         res.send(details);
                    //                     }
                    //                 });
                    //             });
                    //         });
    
                    //     }
                    //     // else
                    //     // {
                    //     //     details={userDetailsData:userDetails,servicesCategoriesData:servicesCategories};                                        
                    //     //     // console.log(details);
                    //     //     res.send(details);
                    //     // }
    
                    // });
    
                        
                        
                                           
    //               });
                // }
                // else
                // {
                    
                    console.log(servicesCategories);
                    details={servicesCategoriesData:servicesCategories};  
                    console.log(details);
                    res.send(details);
                // }
                // res.send(servicesCategories);
                // details.push({servicesCategoriesData:servicesCategories});
                
                
            }
            else {
                    details={servicesCategoriesData:servicesCategories};  
                    console.log(details);
                    res.send(details);
                // data not exists
                
                // var j = 0;
                // var k = 0;
                // // save data in bookingServiceCategoriesData model
                //  var selectedServicesCategories = [];
                
                // var singleCategoryData = new bookingServiceCategoriesData();            
                // for (var i = 0; i < services.length; i++) {
                //     // save services
                //     // singleCategoryData.services.push(services[i]);
                //     var singleCategoryData = new bookingServiceCategoriesData(services[i]);
                    
    
                //      singleCategoryData.save().then(function (savedCategories) {
                //         if (savedCategories) {                        
                            
                //             selectedServicesCategories.push(savedCategories);
    
                //             var singleServiceData = new bookingServiceTypesData({ serviceId: savedCategories._id, serviceTypeName: serviceTypeNames[savedCategories._id], image: serviceImages[savedCategories._id], price: servicePrices[savedCategories._id], timeSlotsDuration: timeSlots[savedCategories._id]});
                                                
                //             singleServiceData.save();
    
                //                 if (j == services.length - 1) {
                                    
                                    
                                    
                //                     // if user is login, then get user details otherwise only get selectedServicesCategories data.
                //                     if(req.session.loginId)
                //                     {
                //                         console.log('login');
                //                         // get user details by session login id.
                //                         userLoginSchema.find({_id:req.session.loginId}, (userDetailsError,userDetails)=>{
                //                             if(userDetailsError)
                //                             {
                //                                 // error 
                //                                 console.log(userDetailsError);
                //                                 return false;
                //                             }
                                            
                                            
                //                             // details.userDetailsData=userDetails;
                //                             details={servicesCategoriesData:selectedServicesCategories};
                //                             console.log(details);
                //                             res.send(details);                    
                //                     });
                //                 }
                //                 else
                //                 {
                //                     console.log('logout');
                //                     details={servicesCategoriesData:selectedServicesCategories};
                //                     console.log(details);
                //                     res.send(details);
                //                 }
                //                 }
                //                 j++;                        
                //         }
                //     });                
                // }            
            }
        });
    },
    getTypeOfServices : function(req,res) {
        const bookingServiceTypesData = require('../../database/models/serviceTypes');   
    
        // when data comes from homepage.
        if(req.body.gender != undefined)
        {
            const serviceCategories = require('../../database/models/serviceCategories');
            serviceCategories.findOne({_id:req.body.serviceId, gender:req.body.gender},(err, docs1)=>{
                if(err)
                {
                    console.log('error in service categories');
                    return false;
                }
                // console.log(docs1);
                if(docs1 == null)
                {
                    // res.send(docs);
                    console.log('heyhey');
                    res.send({result:0});
                    
                }
                else
                {
                    bookingServiceTypesData.find({ serviceId: req.body.serviceId }, (error, docs) => {
                        if(error)
                        {                        
                            res.send({result:0});                        
                        }
                        else
                        {
                            if (docs.length > 0) {                        
                                // console.log(docs);                        
                                res.send({result:docs});
                            }
                            else
                            {
                                res.send({result:2});
                            }
                        }
    
                    });                
                }
                
            });
        }
        // when i click on service category in booking-service page.
        else
        {
            bookingServiceTypesData.find({ serviceId: req.body.serviceId }, (error, docs) => {
                if (docs.length > 0) {
                    
                    console.log(docs);
                    res.send({result:docs});
                }
                else
                {
                    res.send({result:2});
                }
            });
        }
    },
    getTimeSlotsForDate : function(req, res) {
        const paymentSchema = require('../../database/models/payment');
        const serviceSchema = require('../../database/models/serviceTypes');
        paymentSchema.find({bookingDate:req.body.bookingDate, bookingType: 1},(err,docs)=>{
        //paymentSchema.find({bookingDate:"16/01/2018", bookingType: 1},(err,docs)=>{
            console.log('api.js');
            var timeSlotsInfo=[];
            if(docs.length > 0)
            {           
                _.forEach(docs,(paymentData, index)=>{
                    console.log('data '+index);                
                    serviceSchema.findOne({_id:paymentData.bookingServiceId},(servicesError, servicesResult)=>{             
                        if(servicesResult)
                        {
                            console.log(servicesResult);
                            timeSlotsInfo.push({timeSlot:paymentData.timeSlot, duration: servicesResult.timeSlotsDuration});
                            
                            if(index == docs.length-1)
                            {   
                                res.status(200).send({status : true, data : timeSlotsInfo});
                            }
                        }
                        else
                        {
                            res.status(200).send({status : false, data : timeSlotsInfo});
                        } 
                    });                 
                });
            }
            else
            {
                res.status(200).send({status : false, data : timeSlotsInfo});
            }        
        });
    }

}

module.exports = frontController;