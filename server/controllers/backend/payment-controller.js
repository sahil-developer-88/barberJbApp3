const paymentModel = require('../../database/models/payment');
const mongoose = require('mongoose');
const promoCodeModel = require('../../database/models/promoCodes');
module.exports = function(express) {
    const router = express.Router();
    router.post('/paymentStatus',(req, res) => {
        
        
        const users = require('../../database/models/userRegistration');
        const paymentModel = require('../../database/models/payment');
        const startIndex = parseInt(req.body.startIndex);
        const pageSize = parseInt(req.body.pageSize);
        console.log('req.headers');
        console.log(req.headers);
        console.log(req.body.startIndex);
        console.log(req.body.pageSize);
        paymentModel.aggregate([
            {
                $lookup : {
                    from : 'users',
                    localField : 'userId',
                    foreignField : '_id',
                    as : 'usersData'
                },
            },
            {
                $unwind : "$usersData"
            },
            {
                $sort : {
                    "createdDate" : -1
                }
            },
            {
                $limit : startIndex + pageSize
            },
            {
                $skip : startIndex
            },
            
            {
                $project : {
                    firstName : "$usersData.firstName",
                    lastName : "$usersData.lastName",
                    email : "$usersData.email",
                    phoneNumber : "$usersData.phoneNumber",
                    bookingType : "$bookingType",
                    timeSlot : "$timeSlot",
                    successStatus : "$successStatus"
                }
            }
        ],(err, response) => {
            console.log('payment response');
            console.log(response);
            response.length > 0 ? res.status(200).send(response) : res.status(200).send([]);
        });
    });

    router.get('/paymentCollectionLength',(req, res) => {
        const paymentModel = require('../../database/models/payment');
        paymentModel.find({},(err, docs) => {
            if(err)
                return err;
            if(docs.length > 0) {
                res.status(200).send({count : docs.length});
            }
            else {
                res.status(200).json({count : 0});
            }
            
        });
    });

    router.post('/serviceBookingPaymentDetails',(req, res) => {
        const paymentModel = require('../../database/models/payment');
        const userModel = require('../../database/models/userRegistration');
        const serviceTypesModel = require('../../database/models/serviceTypes');
        const appointmentModel = require('../../database/models/appointmentBookingList');
        var paymentDetails, bookingServiceDetails;
        
        const mongoose = require('mongoose');

        const _id = req.body._id;
        const bookingType = req.body.bookingType;
        paymentModel.aggregate([
            {
                $match : {
                    _id : mongoose.Types.ObjectId(_id)
                }
            },
            {    
                $lookup : {
                    from : 'users',
                    localField : 'userId',
                    foreignField: '_id',
                    as : 'userDetails'
                }
            },
            {
                $unwind : '$userDetails'
            },
            {
                $lookup : {
                    from : 'service-types-data',
                    localField : 'bookingServiceId',
                    foreignField : '_id',
                    as : 'serviceBookingDetails'
                }
            },  
            {
                $unwind : '$serviceBookingDetails'
            },
            {
                $project : {
                    _id : 0,
                    userDetails : { 'firstName' : '$userDetails.firstName', 'lastName' : '$userDetails.lastName', 'email' : '$userDetails.email', 'city' : '$userDetails.city', 'state' : '$userDetails.state', 'phoneNumber' : '$userDetails.phoneNumber' },
                    paymentDetails : {bookingType : '$bookingType', bookingDate : '$bookingDate', successStatus : '$successStatus', createdDate : '$createdDate', timeSlot : '$timeSlot', 'successStatus' : '$successStatus', 'promoCode' :{
                        $cond : {
                            if : '$promoCodeId', then : '$promoCodeId', else : null
                        }
                    }},
                    serviceBookingDetails : { serviceTypeName : '$serviceBookingDetails.serviceTypeName', image : '$serviceBookingDetails.image', price : '$serviceBookingDetails.price', timeSlotsDuration : '$serviceBookingDetails.timeSlotsDuration' }
                }
            }
        ],(err, response) => {
            if(err)
                return err;

            console.log('here');
            console.log(response[0]);
            // if promo code id is not null, then we need to find promo code corresponds to its id.
            if(response[0].paymentDetails.promoCode != null) {
                var promoCodeId = response[0].paymentDetails.promoCode;
                promoCodeModel.aggregate([
                    {
                        $match : {
                            _id : mongoose.Types.ObjectId(promoCodeId)
                        }
                    }
                ],(promoCodeErr, promoCodeRecord)=> {
                    if(promoCodeErr) {
                        console.log('promo code error');
                        return false;
                    }

                    if(promoCodeRecord.length > 0) {
                        response[0].paymentDetails.promoCode = promoCodeRecord[0].promoCode;
                        res.status(200).send(response[0]);            
                    }
                    else {
                        res.status(200).send(response[0]);
                    }   
                });
            }
            else {
                res.status(200).send(response[0]);
            }
        });
    });
    router.post('/offlineBookingPaymentDetails',(req, res) => {
        
        const paymentModel = require('../../database/models/payment');
        const userModel = require('../../database/models/userRegistration');
        var paymentDetails, bookingServiceDetails;
        
        const mongoose = require('mongoose');

        const _id = req.body._id;
        const bookingType = req.body.bookingType;
        paymentModel.aggregate([
            {
                $match : {
                    _id : mongoose.Types.ObjectId(_id)
                }
            },
            {    
                $lookup : {
                    from : 'users',
                    localField : 'userId',
                    foreignField: '_id',
                    as : 'userDetails'
                }
            },
            {
                $unwind : '$userDetails'
            },
            {
                $project : {
                    _id : 0,
                    userDetails : { 'firstName' : '$userDetails.firstName', 'lastName' : '$userDetails.lastName', 'email' : '$userDetails.email', 'city' : '$userDetails.city', 'state' : '$userDetails.state', 'phoneNumber' : '$userDetails.phoneNumber' },
                    paymentDetails : {bookingType : '$bookingType', bookingDate : '$bookingDate', successStatus : '$successStatus', createdDate : '$createdDate', timeSlot : '$timeSlot', 'successStatus' : '$successStatus', serviceOrProductName : '$serviceOrProductName', serviceOrProductPrice : '$serviceOrProductPrice'}
                }
            }
        ],(err, response) => {
            if(err)
                return err;
            
                console.log(response);
            var paymentDetails = response[0];
            res.status(200).send(paymentDetails);
        });
    })
    router.get('/demoDetails',(req,res) => {
        const paymentModel = require('../../database/models/payment');
        paymentModel.aggregate([
            {
                $project : {
                    _id : 0
                }
            }
        ],
            (err, data) => {
                console.log(data);
                res.json(data);
            }
        );
    });
    router.get('/updateDetails',(req, res) => {
        
        const paymentModel = require('../../database/models/payment');
        const mongoose = require("mongoose");
        var date_format;
        var moment = require('moment');
        
        paymentModel.aggregate([
            {
                $match : {
                    _id : mongoose.Types.ObjectId("5b1cb91a417cac56042fdba4")
                }
            }
        ],(err, response) => {
            if(err)
                return err;
            if(response) {
                date_format = moment(response[0].createdDate+" 09:21:55 111", "DD-MM-YYYY, H:mm:ss SSS");
                unix_timestamp = date_format.unix();
                console.log("unix_timestamp",unix_timestamp);
                var conditions = { _id: response[0]._id }
                , update = { createdDate: unix_timestamp}
                , options = { multi: true };
                paymentModel.update(conditions, update, options,(err,updateRecord) => {
                    if(updateRecord.ok == 1)
                    {
                        res.json(1);
                    }
                    else {
                        res.json(0);
                    }
                });
            }
        });
    })
    router.get('/paymentDemo',(req, res) => {
        console.log('hiiiiiiii paymentDemo');
        console.log(req.headers);
        // console.log(res.headers);
        res.json('yes');
    });
    return router;
}


