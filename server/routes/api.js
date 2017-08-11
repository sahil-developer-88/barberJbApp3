const express = require('express');
const _=require('lodash');
const router = express.Router();

var bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';







/* 
// 24-5-17
// paypal integration
var paypal = require('paypal-rest-sdk');
// var fs = require('fs');

var paypalCredentials = {
    // "port": 5000,
    "api": {
        "host": "api.sandbox.paypal.com",
        "port": "",
        "client_id": "AfZs659JhohhwBS4f68AIY5pe9n-roJ1paZLQbALU6Qi_vHOc5vt0riKMnPQSLu13jsc7E-Cj-d6FzG4",
        "client_secret": "EA3fr3ntdBsWLGC4DeN5UO1kqTsnUfcl8bZXek6mqthc1wqJoGDrZn4AyVnm3IdRXyL3Cc6T6Zh2rruc"
    }
};
paypal.configure(paypalCredentials);

*/




// var paypal = require('paypal-rest-sdk');
/* try {
    // var configJSON = fs.readFileSync(__dirname + "/config.json");
    // var config = JSON.parse(configJSON.toString()); 

    

} catch (e) {
    console.error("File config.json not found or is invalid: " + e.message);
    process.exit(1);
} */















/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});


// save services during loading of page.
router.get('/serviceCategorySelection', (req, res) => {
    const bookingServiceCategoriesData = require('../database/models/serviceCategories');
    const bookingServiceTypesData = require('../database/models/serviceTypes');
    const userLoginSchema = require('../database/models/userRegistration');
    const payment = require('../database/models/payment');

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
});


// get type of services corresponding to service id.
router.post('/getTypeOfServices', (req, res) => {
    const bookingServiceTypesData = require('../database/models/serviceTypes');    
    bookingServiceTypesData.find({ serviceId: req.body.serviceId }, (error, docs) => {
        if (docs.length > 0) {
            
            console.log(docs);
            res.send(docs);
        }
        else
        {
            res.send(docs);
        }
    });
    
});


/*
// get type of services provided by salon.
router.get('/getExistingServices', (req, res) => {
    const salonServices = require('../database/models/inBuiltSalonServices');
    var services = [
        {
            gender: '1',
            serviceName:'hairStyles'
        },
        {
            gender: '2',
            serviceName: 'tatoo'
        },
        {
            gender: '2',
            serviceName: 'makeup'
        },
        {
            gender: '1',
            serviceName: 'appointment'
        },
        {
            gender: '1',
            serviceName: 'ear pearcing'
        },
        {
            gender: '1',
            serviceName: 'nose pearcing'
        },
        {
            gender: '1',
            serviceName: 'stratening'
        },
        {
            gender: '2',
            serviceName: 'appointment'
        },
        {
            gender: '2',
            serviceName: 'hairStyles'
        }
    ];

    // check services exist in db or not
    salonServices.find({}, (error, docs)=>{
        if (docs.length > 0) {
            console.log('services already exist');
            res.send(docs);
        }
        else
        {
            console.log('services not exist');
            var j = 0;
            var salonDataArr = [];
            for (var i = 0; i < services.length; i++)
            {
                var saveSalonData = new salonServices(services[i]);
                saveSalonData.save().then((salonData) => {
                    if (salonData)
                    {
                        salonDataArr.push(salonData);
                        if (j == services.length - 1)
                        {
                            res.send(salonDataArr);
                        }
                        j++;
                    }
                })

            }
           
        }
    });



});

*/




router.post('/saveUserInfo', (req, res) => {
    const userRegistrationSchema = require('../database/models/userRegistration');
    
    result = {};
    emailExistStatus = 0;
    userCreationStatus = 0;


    userRegistrationSchema.find({ email: req.body.email }, (err, docs) => {
        if (docs.length > 0) {
            emailExistStatus = 1;
            result = {
                userCreationStatus: userCreationStatus,
                emailAlreadyExist: emailExistStatus
            };
            res.send(result);
        }
        else {
            var bcrypt = require('bcrypt');
            const saltRounds = 10;
            const myPlaintextPassword = req.body.password;

            bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
                // Store hash in your password DB. 
                // console.log(hash);
                // saved.    
                var userDetails = { firstName: req.body.firstName, lastName: req.body.lastName, password: hash, email: req.body.email };
                var userRegister = new userRegistrationSchema(userDetails);

                if (userRegister.save().then(function (userSave) {                    
                    if (userSave) {
                        userCreationStatus = 1;
                        req.session.loginSession = true;    // when user will be login.   
                        req.session.loginId=userSave._id;

                    }
                    result = {
                        userCreationStatus: userCreationStatus,
                        emailAlreadyExist: emailExistStatus
                    };
                    res.send(result);
                }));
            });
        }
    });
});







// app.use(router);

// this method calls when user click on login button.
router.post('/login', (req, res) => {

    const userLoginSchema = require('../database/models/userRegistration');
    // check login details
    userLoginSchema.find({ email: req.body.email }, (error, docsLogin) => {
        if (error) {
            console.log(error);
        }
        // console.log(docsLogin+'hhhh');
        if (docsLogin.length > 0) {

            bcrypt.compare(req.body.password, docsLogin[0].password, function (error, response) {
                // if (!req.session.loginSession) {
                if (response == true) {
                    req.session.loginSession = true;    // when user will be login.   
                    req.session.loginId=docsLogin[0]._id;   
                    var name=docsLogin[0].firstName+' '+docsLogin[0].lastName;  
                    var result={isLogin:response,name:name};
                    res.send(result);
                }
                else {
                    var result={isLogin:response,name:''};
                    res.send(result);
                }

            });
        }
        else {
                var result={isLogin:false,name:''};
                res.send(result);
        }

    });

});

// this method calls during loading of page. (header.component.ts)
router.get('/checkLogin', (req, res) => {
    
    var loginSessionValue;
    if (!req.session.loginSession) {
        // console.log(req.session.loginSession);
        req.session.loginSession = false;

        console.log(req.session.loginSession);
        loginSessionValue=false;
        res.json(loginSessionValue);
    }
    else {
        if (req.session.loginSession == true) {
            console.log(req.session.loginSession);
            loginSessionValue=true;
            res.json(loginSessionValue);
        }

    }

});

// this method calls by pressing of logout button.
router.get('/pressLogout', (req, res) => {
    var loginSessionValue;
    if (req.session.loginSession == true) {
        // req.session.loginSession = false;
        req.session.destroy();
        loginSessionValue=false;
        res.json(loginSessionValue);
    }

});

router.post('/payment', (req, res) => {
    console.log('data under payment is coming');
    const userDetailsSchema = require('../database/models/userRegistration');
    const paymentSchema = require('../database/models/payment');
    var Razorpay=require('razorpay');
    var paymentId=req.body.paymentId;
    var phoneNumber=req.body.phoneNumber;
    var state=req.body.state;
    var city=req.body.city;
    var bookingType=req.body.bookingType;
    var loginSessionId=req.session.loginId;
    var instance = new Razorpay({
    key_id: 'rzp_test_xTVYVlOmAgyUyO',
    key_secret: 'jzbSVLzCEIS8pU5fKM8htDco'
});
    var price;
    if(bookingType == 3)
    {
        price=parseInt(req.body.price)*100;
    }
    else
    {
        price=req.body.price;
    }
    
    instance.payments.capture(paymentId, price);
    
    // update profile details
     var conditions = { _id: loginSessionId }
  , update = { phoneNumber: phoneNumber, state: state, city: city }
  , options = { multi: true };

  userDetailsSchema.update(conditions, update, options, function(err,numAffected){
      
      if(numAffected.ok == 1)
      {
          
          var date=new Date();
          var todayDate=date.getDate()+'/'+(parseInt(date.getMonth())+1)+'/'+date.getFullYear();
          if(bookingType == 1)
          {
              
            var paymentData=new paymentSchema({paymentId: paymentId, userId: loginSessionId, bookingServiceId: req.body.serviceId, bookingDate: req.body.bookingDate, timeSlot: req.body.timeSlot, successStatus:1, createdDate:todayDate, bookingType: bookingType });
            paymentData.save().then(function(savedPaymentData) {
                req.session.thanks=true;
                // res.json(paymentId);
                res.send({paymentTabId:''});
            }); 
          }
            else if(bookingType == 2)
            {
                var paymentData=new paymentSchema({paymentId: paymentId, userId: loginSessionId, bookingProductId: req.body.productId, successStatus:1, createdDate:todayDate, bookingType: bookingType, productQuantity: req.body.quantity, stars: -1, review: '' });
                paymentData.save().then(function(savedPaymentData) {
                req.session.thanks=true;
                res.send({paymentTabId:savedPaymentData._id});
                


                // payment.find({},(err,docs)=>{
                //     if(docs[docs.length - 1].bookingType == 2 && docs[docs.length - 1].stars != -1 && docs[docs.length - 1].review != '')
                //     {
                //         showFormStatus=1;
                //     }
                //     else if(docs[docs.length - 1].bookingType == 2 && docs[docs.length - 1].stars == -1 && docs[docs.length - 1].review == '')
                //     {
                //         showFormStatus=2;
                //     }
                //     else 
                //     {
                //         if(docs[docs.length - 1].bookingType != 2)
                //         {
                //             showFormStatus=0;
                //         }
                //     }
                //     result={thanksValue: thanksValue, showFormStatus: showFormStatus };                
                //     res.send(result);
                // });


                // res.json(paymentId);
                });
            }
            else
            {
                if(bookingType == 3)
                {
                    price=parseInt(price)/100;
                    var paymentData=new paymentSchema({paymentId: paymentId, userId: loginSessionId, serviceOrProductPrice: req.body.price, serviceOrProductName:req.body.serviceOrProductName, successStatus:1, createdDate:todayDate, bookingType: bookingType });
                    paymentData.save().then(function(savedPaymentData) {
                        req.session.thanks=true;
                        // res.json(paymentId);
                        res.send({paymentTabId:''});
                    });
                }
            }
          
            
      }
  });   

    // issue to check how to check for payment success.
    
});

router.post('/getLoginInfoAndBookingInfo',(req,res)=>{
    const userRegistrationSchema = require('../database/models/userRegistration');
    const bookingServiceTypesData = require('../database/models/serviceTypes');
    const bookingProducts = require('../database/models/bookingProducts');
    var loginSessionId=req.session.loginId;
    
    var data=[];
    userRegistrationSchema.find({_id:loginSessionId},(error, userData)=>{
        // bookingType = 1 for service booking
        if(req.body.bookingType == 1)
        {
            var id=req.body.serviceType;
            bookingServiceTypesData.find({_id:id},(serviceTypeError, serviceTypeData)=>{
                if(serviceTypeError)
                {
                    console.log(serviceTypeError);                
                }
                console.log('servicetypes');
                data={userData:userData, serviceOrProductData:serviceTypeData};
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
                    res.send(data);
                    return false;
                }
                console.log('products');
                console.log(productData);
                data={userData:userData, serviceOrProductData:productData};
                // console.log(serviceTypeData);
                res.send(data);
            });
        }
        else
        {
            if(req.body.bookingType == 3)
            {
                data={userData:userData, serviceOrProductData:[]};                
                res.send(data);
            }

        }
        
        
        
    });
    
});

router.post('/getTimeSlotsForDate',(req,res)=>{
    const paymentSchema = require('../database/models/payment');
    const serviceSchema = require('../database/models/serviceTypes');
    paymentSchema.find({bookingDate:req.body.bookingDate, bookingType: 1},(err,docs)=>{
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
                            res.send(timeSlotsInfo);
                        }
                    }
                    else
                    {
                        res.json(timeSlotsInfo);                        
                    } 
                });                 
            });
        }
        else
        {
            res.json(timeSlotsInfo);
        }        
    });
});

router.get('/thanksPageValidation',(req,res)=>{
    const payment = require('../database/models/payment');
    var thanksValue;
    var result;
    var showFormStatus;    
    // req.session.thanks=true;
    if(!req.session.thanks)
    {
        thanksValue=false;
        result={thanksValue: thanksValue };        
        res.send(result);
    }
    else
    {
        if(req.session.thanks == true)
        {
            thanksValue=true;            
            result={thanksValue: thanksValue};
            res.send(result);






            // payment.find({},(err,docs)=>{
            //     if(docs[docs.length - 1].bookingType == 2 && docs[docs.length - 1].stars != -1 && docs[docs.length - 1].review != '')
            //     {
            //         showFormStatus=1;
            //     }
            //     else if(docs[docs.length - 1].bookingType == 2 && docs[docs.length - 1].stars == -1 && docs[docs.length - 1].review == '')
            //     {
            //         showFormStatus=2;
            //     }
            //     else 
            //     {
            //         if(docs[docs.length - 1].bookingType != 2)
            //         {
            //             showFormStatus=0;
            //         }
            //     }
            //     result={thanksValue: thanksValue, showFormStatus: showFormStatus };                
            //     res.send(result);
            // });
            
        }
        else
        {
            if(req.session.thanks == false)
            {
                thanksValue=false;                            
                result={thanksValue: thanksValue};
                res.send(result);                
            }
        }
    }

});

router.get('/lastPaymentDetails',(req,res)=>{
    const payment = require('../database/models/payment');
    payment.find({},(err,docs)=>{
                console.log(docs[docs.length - 1]);
    });
});

// booking-product component
router.get('/getProductDetails',(req,res)=>{
    const bookingProductsSchema = require('../database/models/bookingProducts.js');    
    bookingProductsSchema.find({},(err,docs)=>{
        console.log('product details');        
        res.send(docs);
    }); 

    // const paymentSchema = require('../database/models/payment.js');    
    // paymentSchema.find({}, (err,docs)=>{
    //     console.log(docs);
    //     res.send(docs);
    // }); 
});






// booking page
// get booked services
router.get('/getBookedServicesData',(req,res)=>{
    const bookingServiceCategoriesData = require('../database/models/serviceCategories');
    const bookingServiceTypesData = require('../database/models/serviceTypes');
    const payment = require('../database/models/payment');
    


     // const userLoginSchema = require('../database/models/userRegistration');

    var paymentDataServices=[];
    
    var paymentDataWithoutBooking=[];
    var details;
    var paymentData;
    // req.session.loginId="594a7053f510150c746d3a0d";
                // services Records

                // so, user can not redirect to thanks page.
                if(req.session.thanks && req.session.thanks == true )
                {
                    req.session.thanks=false;
                }
                payment.find({userId:req.session.loginId,bookingType:1},(paymentDataErr,servicesRecords)=>{
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
});

// booking page
// booked products
router.get('/getBookedProductsData',(req,res)=>{
    const payment = require('../database/models/payment');
    const bookingProducts = require('../database/models/bookingProducts');
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
});

// booking page
// payment data without booking
router.get('/getWithoutBookingData',(req,res)=>{
    const payment = require('../database/models/payment');
    const bookingProducts = require('../database/models/bookingProducts');
    var paymentDataWithoutBooking=[];
    var details;
    // req.session.loginId="594a7053f510150c746d3a0d";
    // so, user can not redirect to thanks page.
    if(req.session.thanks && req.session.thanks == true )
    {
        req.session.thanks=false;
    }

    payment.find({userId:req.session.loginId,bookingType:3},(noBookingDataErr,noBookingRecords)=>{
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
});


//  home page

router.get('/getServicesList',(req,res)=>{
    const bookingServiceCategoriesData = require('../database/models/serviceCategories');
    const bookingServiceTypesData = require('../database/models/serviceTypes');
    bookingServiceCategoriesData.find({},(err, records)=>{
        _.forEach(records,(singleService,serviceIndex)=>{
            bookingServiceTypesData.find({serviceId:singleService._id},(singleServiceType, serviceTypeError)=>{
                
            });
        });
    });
});


// single product page
// to get product details corresponding to product id.
router.post('/getSingleProductInfo',(req,res)=>{
    const bookingProductsSchema = require('../database/models/bookingProducts.js');
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
});

// thanks page feedback form
router.post('/feedbackForm',(req,res)=>{
    const paymentSchema = require('../database/models/payment.js');
    var stars=req.body.stars;
    var review=req.body.review;
    var updationStatus;
    paymentSchema.find({},(err,docs)=>{
        if(docs[docs.length - 1].bookingType == 2)
        {
            var conditions = { _id: docs[docs.length - 1]._id }
            , update = { stars: stars, review: review }
            , options = { multi: true };
            payment.update(conditions, update, options, function(err,numAffected){      
                if(numAffected.ok == 1)
                {
                    res.send({updationStatus: 1});
                }
                else
                {
                    res.send({updationStatus: 0});
                }
            });
        }
        else
        {
            res.send({updationStatus: 0});
        }
    });
});










// APIS
// booking-products page.
// to insert new products.
router.post('/productDetailsInsertion',(req,res)=>{
    const bookingProductsSchema = require('../database/models/bookingProducts.js');
    if(!req.body.name || req.body.name == '')
    {
        res.json('Please check name field.');
    }

    if(!req.body.image || req.body.image == '')
    {
        res.json('Please check image field.');
    }

    if(!req.body.price || req.body.price == '')
    {
        res.json('Please check price field.');
    }

/*    if(!req.body.quantity || req.body.quantity == '')
    {
        res.json('Please check quantity field.');
    } */


    var date=new Date();
    var todayDate=date.getDate()+'/'+(parseInt(date.getMonth())+1)+'/'+date.getFullYear();
    var productsData=new bookingProductsSchema({name:req.body.name, image:req.body.image, price:req.body.price, createdDate:todayDate});
    productsData.save().then(()=>{
        bookingProductsSchema.find({},(err,docs)=>{
            console.log(docs);
        }); 
        res.json('record saved successfully');
    }); 
});

// booking-service page
router.post('/serviceCategoryInsertion', (req, res) => {
    const bookingServiceCategoriesData = require('../database/models/serviceCategories');
    const bookingServiceTypesData = require('../database/models/serviceTypes');
    

    if(!req.body.gender || req.body.gender == '')
    {
        res.json('Please check gender field.');
    }

    if(!req.body.serviceName || req.body.serviceName == '')
    {
        res.json('Please check service name field.');
    }

    if(!req.body.serviceTypeName || req.body.serviceTypeName == '')
    {
        res.json('Please check serviceTypeName field.');
    }

    if(!req.body.serviceImage || req.body.serviceImage == '')
    {
        res.json('Please check serviceImage field.');
    }

    if(!req.body.servicePrice || req.body.servicePrice == '')
    {
        res.json('Please check servicePrice field.');
    }

    if(!req.body.timeSlot || req.body.timeSlot == '')
    {
        res.json('Please check timeSlot field.');
    }        
    // console.log('booking Service Categories Data');
    // bookingServiceCategoriesData.find({},(err, docs)=>{
    //     console.log(docs);
    // });

    // console.log('booking Service Types Data');
    //     bookingServiceTypesData.find({},(err, docs)=>{
    //     console.log(docs);
    // });
    // return false;    


    
    
            // check same service name exists or not
            bookingServiceCategoriesData.find({services:req.body.serviceName},(err, serviceCategories)=>{
                    if(serviceCategories.length > 0)
                    {
                        bookingServiceTypesData.find({serviceTypeName: req.body.serviceTypeName, serviceId: serviceCategories[0]._id },(err, checkServiceTypeName)=>{
                            if(checkServiceTypeName.length > 0) 
                            {
                                res.json('record cant be inserted because same service type name already exists for this service.');
                                
                            }
                            else
                            {
                                // bookingServiceTypesData.find({serviceId: serviceCategories[0]._id})
                                var serviceInsertion=new bookingServiceTypesData({serviceId: serviceCategories[0]._id, serviceTypeName: req.body.serviceTypeName, image: req.body.serviceImage, price: req.body.servicePrice, timeSlotsDuration: req.body.timeSlot });
                                serviceInsertion.save().then((serviceResult)=>{
                                    if(serviceResult)
                                    {
                                        res.send('service inserted successfully');
                                    }
                                    else
                                    {
                                        res.send('service insertion failure error');
                                    }
                                });
                            }
                        });                        
                    }
                    else
                    {
                        var serviceInsertion=new bookingServiceCategoriesData({gender:req.body.gender, services:req.body.serviceName });
                        serviceInsertion.save().then(function (serviceData) {
                            if(serviceData)
                            {
                                var serviceTypesInsertion=new bookingServiceTypesData({serviceId: serviceData._id, serviceTypeName: req.body.serviceTypeName, image: req.body.serviceImage, price: req.body.servicePrice, timeSlotsDuration: req.body.timeSlot });
                                serviceTypesInsertion.save().then(function (serviceResult) {
                                    if(serviceResult)
                                    {
                                        res.send('service name and its type inserted successfully');
                                    }
                                    else
                                    {
                                        res.send('service name and its type insertion failure error');
                                    }
                                });
                            }
                        });

                    }
                }
            );    
});

// api to show services on home page carousel
router.get('/servicesHomePage', (req, res) => {
    const bookingServiceCategoriesData = require('../database/models/serviceCategories');
    const bookingServiceTypesData = require('../database/models/serviceTypes');
    var servicesListing=[];
    bookingServiceCategoriesData.find({},(servicesErr, services)=>{
        if(services.length > 0)
        {
            _.forEach(services,(singleService,serviceIndex)=>{
                bookingServiceTypesData.find({serviceId:singleService._id},(serviceTypesErr,serviceTypes)=>{
                    if(serviceTypes.length > 0)
                    {
                        _.forEach(serviceTypes,(singleServiceType,serviceTypeIndex)=>{
                            servicesListing.push({
                                id:singleServiceType._id, 
                                title:singleServiceType.serviceTypeName, 
                                price:singleServiceType.price, 
                                imageUrl:singleServiceType.image, 
                                isMouseOver:false 
                            });
                            if(serviceIndex == services.length-1 && serviceTypeIndex == serviceTypes.length-1)
                            {
                                res.send(servicesListing);
                            }                            
                        });
                    }                    
                });                
            });
        }
        else
        {
            res.send(servicesListing);
        }
    });
}); 

// api to show only 2 products on home page
router.get('/productsHomePage', (req, res) => {
    const bookingProductsSchema = require('../database/models/bookingProducts.js');
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
});


// delete all data corresponding to their models
router.get('/removeModels', (req, res) => {
    const bookingServiceCategoriesData = require('../database/models/serviceCategories');
    const bookingServiceTypesData = require('../database/models/serviceTypes');
    const payment = require('../database/models/payment');
    bookingServiceCategoriesData.remove({},(err)=>{
        console.log('removed bookingServiceCategoriesData');
    }).exec();

    bookingServiceTypesData.remove({},(err)=>{
        console.log('removed bookingServiceTypesData');
    }).exec();

    payment.remove({},(err)=>{
        console.log('removed payment');
    }).exec();
    res.json('models data removed');
});


// router.get('/getLoginDetails', (req, res) => {
//     const userLoginSchema = require('../database/models/userRegistration');
//     userLoginSchema.findOne({_id: req.session.loginId},(err,details)=>{
//         var data=details.firstName+' '+details.lastName;
//         res.json(data);
//     });
// });


module.exports = router;