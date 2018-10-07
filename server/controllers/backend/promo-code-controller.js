var errors = require('../../shared/msg');
const categoryModel = require('../../database/models/serviceCategories');
const serviceModel = require('../../database/models/serviceTypes');
const paymentModel = require('../../database/models/payment');
const userModel = require('../../database/models/userRegistration');
const promoCodeModel = require('../../database/models/promoCodes');
const promoCodeUserRelationModel = require('../../database/models/promoCodesUsersRelation');
const moment = require('moment');
const mongoose = require('mongoose');
var request = require("request");
var promoCodeController = {
    // admin page
    promoCodeList : (req, res) => {
        if(!req.body)
        {
            console.log('body');
            return res.status(errors.MissingRequiredData.code).send(errors.MissingRequiredData);
        }
        
        
        startIndex = parseInt(req.body.startIndex);
        pageSize =  parseInt(req.body.pageSize);
        promoCodeModel.aggregate([
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
            }
        ],
        (err, response) => {
            if(err) {
                console.log('err');
                return res.status(errors.InternalServerError.code).send(errors.InternalServerError);
            }

            if(response.length > 0) {
                return res.status(200).send(response);
            }
            else {
                if(response.length == 0) {
                    return res.status(200).send([]);
                }                
            }
        });
    },
    // admin page
    promoCodeUsersDetails : (req, res) => {
        
        console.log(req.body._id);
        promoCodeModel.aggregate([
                {
                    $match : {
                        _id : mongoose.Types.ObjectId(req.body._id)
                    }
                },
                {
                    $lookup : {
                        from : 'promo-codes-users-relation',
                        localField : '_id',
                        foreignField : 'promoCodeId',
                        as : 'promoCodeRelationData'
                    }
                },
                {
                    $unwind : '$promoCodeRelationData'
                },
                {
                    $lookup : {
                        from : 'users',
                        localField : 'promoCodeRelationData.userId',
                        foreignField : '_id',
                        as : 'usersData'
                    }
                },
                {
                    $unwind : '$usersData'
                },
                {
                    $project : {
                        _id : 0,
                        name: {firstName : '$usersData.firstName', lastName : '$usersData.lastName'},
                        email : '$usersData.email',
                        status : '$promoCodeRelationData.status',
                        createdDate: '$promoCodeRelationData.createdDate'
                    }
                }
            ],
            (err, response) => {
                if(err)
                    return res.status(errors.InternalServerErrorQuery.code).send(errors.InternalServerErrorQuery);
                return res.status(200).send(response);
        });
        
    },
    // admin page
    usersList : (req, res) => {
        userModel.aggregate([
            {
                $match : {
                    role : 0
                }
            },
            {
                $project : {
                    firstName : 0,
                    lastName : 0,
                    password : 0,
                    city : 0,
                    state : 0,
                    phoneNumber : 0,
                    role : 0
                }
            }
        ],(err, response)=> {
            if(err)
                return res.status(errors.InternalServerError.code).send(errors.InternalServerError);

            console.log(response.length); 
            if(response.length > 0) {
                res.status(200).send({status : 1, data : response});
            }
            else {
                res.status(200).send({status : 0, data : []});
            }
        });
    },
    // admin page
    checkExistingUsers : (req,res)=> {
        if(!req.body)
        return res.status(errors.MissingRequiredData.code).send(errors.MissingRequiredData);

        if(!req.body.promoCode || !req.body.discount || !req.body.startingDate || !req.body.endingDate || !req.body.selectedUsers)
        return res.status(errors.MissingRequiredData.code).send(errors.MissingRequiredData);

        const promoCode = req.body.promoCode;
        const discount = req.body.discount;
        var startingDate = moment(req.body.startingDate).unix();
        var endingDateUnix = moment(req.body.endingDate).unix();
        var splitEndingDate = moment.unix(endingDateUnix).format('YYYY-MM-DD HH:mm:ss').split(" ");
        var endingDate = moment(splitEndingDate[0]+" 23:59:59", 'YYYY-MM-DD HH:mm:ss').unix();
        var selectedUsers = req.body.selectedUsers;
        const createdDate = moment().unix();
        var finalResult =[];

        selectedUsers=selectedUsers.map((data) => {
            data = mongoose.Types.ObjectId(data)
            return data;
        });
        console.log('startingDate');
        console.log(startingDate);
        console.log(endingDate);

        // get list of  existing users having pending promo code to use.
        promoCodeUserRelationModel.aggregate([
            {
                $match : {
                    userId : {
                        $in : selectedUsers
                    },
                    status : 1
                }
            },
            {
                $lookup : {
                    from : 'users',
                    localField : 'userId',
                    foreignField : '_id',
                    as : 'usersData'
                }
            },
            {
                $unwind : '$usersData'
            },
            {
                $lookup : {
                    from : 'promo-codes',
                    localField : 'promoCodeId',
                    foreignField : '_id',
                    as : 'promoCodeData'
                }
            },
            {
                $unwind : '$promoCodeData'
            },
            {
                $project : {
                    _id : 1,
                    userId : '$usersData._id',
                    // dbStartingDate : '$promoCodeData.startingDate',
                    // dbEndingDate : '$promoCodeData.endingDate',
                    // inputStartingDate : startingDate,
                    // inputEndingDate : endingDate,
                    email : {
                        $cond : {
                            if: {
                                $or : [
                                    {
                                        $and: [ 
                                            { $gte :[parseInt(startingDate), '$promoCodeData.startingDate'] }, 
                                            { $lte : [parseInt(endingDate), '$promoCodeData.endingDate'] } 
                                        ]
                                    },
                                    {
                                        $and : [
                                            { $eq :[parseInt(startingDate), '$promoCodeData.startingDate'] }, 
                                            { $eq : [parseInt(endingDate), '$promoCodeData.endingDate'] } 
                                        ]
                                    },
                                    {
                                        $and: [ 
                                            { $lte :[parseInt(startingDate), '$promoCodeData.startingDate'] }, 
                                            { $gte : [parseInt(endingDate), '$promoCodeData.startingDate'] },
                                            { $lte : [parseInt(endingDate), '$promoCodeData.endingDate'] }
                                        ]
                                    },
                                    {
                                        $and: [ 
                                            { $gte :[parseInt(startingDate), '$promoCodeData.startingDate'] },
                                            { $lte : [parseInt(startingDate), '$promoCodeData.endingDate'] },
                                            { $gte : [parseInt(endingDate), '$promoCodeData.endingDate'] }
                                        ]
                                    }
                                ]
                            }, 
                            then : '$usersData.email',
                            else : null
                        }
                    }
                }
            }
        ],(relationErr, relationResponse)=> {
            if(relationErr) {
                return res.status(errors.InternalServerError.code).send(errors.InternalServerError);
            }

            if(relationResponse.length > 0) {
                // email can be null, so, we need to exclude records having email : null
                console.log('relationResponse');
                console.log(relationResponse);
                finalResult = relationResponse.filter((data)=> data.email != null);
                console.log('finalResult');
                console.log(finalResult);
                return res.status(200).send({status : finalResult.length > 0 ? 1 : 0, data : finalResult});
            }
            else {
                return res.status(200).send({status : 0, data : []});
            }

        });

    },
    // admin page
    savePromoCodeDetails : (req, res) => {
        if(!req.body)
        return res.status(errors.MissingRequiredData.code).send(errors.MissingRequiredData);

        if(!req.body.promoCode || !req.body.discount || !req.body.startingDate || !req.body.endingDate || !req.body.selectedUsers)
        return res.status(errors.MissingRequiredData.code).send(errors.MissingRequiredData);

        const promoCode = req.body.promoCode;
        const discount = req.body.discount;
        var startingDate = moment(req.body.startingDate).unix();
        var endingDateUnix = moment(req.body.endingDate).unix();
        var splitEndingDate = moment.unix(endingDateUnix).format('YYYY-MM-DD HH:mm:ss').split(" ");
        var endingDate = moment(splitEndingDate[0]+" 23:59:59", 'YYYY-MM-DD HH:mm:ss').unix();
        var selectedUsers = req.body.selectedUsers;
        const createdDate = moment().unix();
        const startIndex = 0;
        const pageSize = parseInt(req.body.pageSize);

        selectedUsers=selectedUsers.map((data) => {
            data = mongoose.Types.ObjectId(data)
            return data;
        });

        // insert new promo code records.
        promoCodeModel.aggregate([
            {
                $match : {
                    promoCode : promoCode
                }
            }
        ], (err, response) => {
            if(err) 
                return res.status(errors.InternalServerError.code).send(errors.InternalServerError);

            if(response.length > 0) {
                return res.status(200).send({status : 0, data : {}, message : 'Promo Code already exists.'});
            }
            else {
                if(response.length == 0) {
                    // when starting and ending dates comes within the db starting and ending dates for selected users, then we need to update those users's status to 0, so can create new users for those users in promoCodesUsersRelation collection.
                    if(req.body.alreadyExistingUsers && req.body.alreadyExistingUsers.length > 0) {
                        console.log('req.body.alreadyExistingUsers');
                        console.log(req.body.alreadyExistingUsers);
                        req.body.alreadyExistingUsers.map((data) => {
                            var conditions = { _id: data._id }
                            , update = { status: 2, modifiedDate : moment().unix()}
                            , options = { multi: true };
                            promoCodeUserRelationModel.update(conditions, update, options,(err, updatedRecords) => {
                                if(err) {
                                    return res.status(errors.InternalServerError.code).send(errors.InternalServerError);
                                }
                                
                                if(updatedRecords.ok == 1  && updatedRecords.nModified == 1) {
                                    console.log(`${data._id} udpated successfully.`);
                                }

                                if(updatedRecords.ok == 1) {
                                    console.log(`${data._id} no changes made.`);
                                }
                            });
                        });
                    }


                    var insertPromoCodeQuery = new promoCodeModel({promoCode, discount, startingDate, endingDate, status : 1, createdDate: moment().unix(), modifiedDate : moment().unix()});
                    insertPromoCodeQuery.save().then((record) => {
                        if(record) {
                            // insert and update promoCodeUserRelations collection with new promo code.
                            console.log('selectedUsers');
                            console.log(selectedUsers);
                            selectedUsers.map((users, index)=>{
                                var insertRelationQuery = new promoCodeUserRelationModel({
                                    promoCodeId : mongoose.Types.ObjectId(record._id),
                                    userId : mongoose.Types.ObjectId(users),
                                    status : 1,
                                    createdDate : moment().unix(),
                                    modifiedDate : moment().unix()
                                });
                                insertRelationQuery.save().then((insertRelationRecord) => {
                                    if(!insertRelationRecord) {
                                        // in case save failure, we need to remove data from promo codes collection.
                                        promoCodeModel.findByIdAndRemove(record._id,(err, removedRecord) => {
                                            if(err)
                                                return res.status(errors.InternalServerError.code).send(errors.InternalServerError);
                                            
                                            console.log('removedRecord');
                                        });
                                    }

                                    if(selectedUsers.length - 1 == index) {
                                        // get first five latest records for data table.
                                        promoCodeUserRelationModel.aggregate([
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
                                                $lookup : {
                                                    from : 'promo-codes',
                                                    localField : 'promoCodeId',
                                                    foreignField : '_id',
                                                    as : 'promoCodeData'
                                                }
                                            },
                                            {
                                                $unwind : '$promoCodeData'
                                            },
                                            {
                                                $lookup : {
                                                    from : 'users',
                                                    localField : 'userId',
                                                    foreignField : '_id',
                                                    as : 'usersData'
                                                }
                                            },
                                            {
                                                $unwind : '$usersData'
                                            },
                                            {
                                                $project : {
                                                    _id : '$promoCodeData._id',
                                                    promoCode : '$promoCodeData.promoCode',
                                                    discount : '$promoCodeData.discount',
                                                    status : '$promoCodeData.status',
                                                    startingDate: '$promoCodeData.startingDate',
                                                    endingDate : '$promoCodeData.endingDate'
                                                }
                                            }
                                
                                        ],(listError, list)=> {
                                            if(listError)
                                                return res.status(errors.InternalServerError.code).send (errors.InternalServerError);
                                            if(list.length > 0)
                                            {
                                                console.log('list');
                                                console.log(list);
                                                return res.status(200).send({status : 1, data : list, message : 'Promo code submitted successfully.'});
                                            }
                                            else {
                                                return res.status(200).send({status : 0, data : [], message : 'Promo code submitted successfully.'});
                                            }
                                        });
                                    }
                                    
                                });
                            });

                            
                        }
                        else {
                            return res.status(errors.InternalServerError.code).send(errors.InternalServerError);
                        }

                    })
                }
            }
        });
    },
    promoCodeListLength : (req, res) => {
        promoCodeUserRelationModel.aggregate([
            {
                $project : {
                    _id : 1
                }
            }
        ],
            (err, response)=> {
                if(err)
                    return res.status(errors.InternalServerError.code).send(errors.InternalServerError);
                if(response.length > 0)
                    return res.status(200).send({promoCodeListLength : response.length});
                else 
                    return res.status(200).send({promoCodeListLength : []});
                
        })
    },
    promoCodeCheck : (req, res) => {
        if(!req.body) 
            return res.status(errors.MissingRequiredData.code).send(errors.MissingRequiredData)
        
        if(!req.body.promoCode) {
            console.log('promo input error');
            return res.status(errors.MissingRequiredData.code).send(errors.MissingRequiredData)
        }
            
        
        if(!req.user) {
            return res.status(errors.InternalServerErrorUser.code).send(errors.InternalServerErrorUser);
        }
        const promoCode = req.body.promoCode;
        const userId = req.user._id;
        const todayDate = moment().unix();
        // const todayDate = 1537986700; 
        console.log('todayDate');
        console.log(todayDate);
        var isUserFlag = 0;
        var isPromoCodeValidFlag = 0;
        var discount;
        var promoCodeId;
        promoCodeModel.aggregate([
            {
                $match : {
                    promoCode : promoCode
                }
            },
            {
                $lookup : {
                    from : 'promo-codes-users-relation',
                    localField : '_id',
                    foreignField : 'promoCodeId',
                    as : 'relationData'
                }
            },
            {
                $unwind : '$relationData'
            },
            {
                $project : {
                    relationId : "$relationData._id",
                    discount : "$discount",
                    promoCodeId : "$_id",
                    isUserExist : {
                        $and : [
                            {
                                $eq : [
                                    userId, "$relationData.userId"
                                ]
                            },
                            {
                                $eq : [
                                    1,"$relationData.status"
                                ]
                            }                            
                        ]

                    },
                    isPromoCodeValid : {
                        $and : [
                            {
                                $gte : [parseInt(todayDate), '$startingDate']
                            },
                            {
                                $lte : [parseInt(todayDate), '$endingDate']
                            }
                        ]
                    }
                }
            }
        ],
        (err, response) => {
            if(err) 
                return res.status(errors.InternalServerError.code).send(errors.InternalServerError);

            if(response.length > 0) {
                console.log('response');
                console.log(response);
                response.map((data) => {
                    if(data.isUserExist == true) {
                        isUserFlag = 1;
                        if(data.isPromoCodeValid == true) {
                            discount = data.discount;
                            promoCodeId = data.promoCodeId;
                            isPromoCodeValidFlag = 1;
                        }
                    }
                    

                });
                console.log(`${isUserFlag} ${isPromoCodeValidFlag}`);
                if(isUserFlag == 0) {
                    console.log('Promo Code does not exist user.');
                    return res.status(200).send({status : 0, data : {}, message : 'Invalid Promo Code.'});  // user does not exist, but for security pupose we need to show message "promo code does not exist"
                }
                
                if(isUserFlag == 1 && isPromoCodeValidFlag == 0) {
                    console.log('promo code not valid');
                    return res.status(200).send({status : 0, data : {}, message : 'Invalid Promo Code.'});  // user does not exist, but for security pupose we need to show message "promo code does not exist"
                }
                
                if(isUserFlag == 1 && isPromoCodeValidFlag == 1)
                    return res.status(200).send({status : 1, data : {discount : discount, promoCodeId : promoCodeId}, message : 'Promo Code applied successfully.'});
                
            }
            else {
                if(response.length == 0) {
                    return res.status(200).send({status : 0, data : {}, message : 'Promo Code does not exist.'});
                }
            }
        });
        
    },
    statusUpdate : (req, res) => {
        var yesterdayDate = moment().subtract(1, 'days').toString();
        var splitDate = yesterdayDate.toString().split(" ");
        var onlyDate = `${splitDate[3]} ${splitDate[1]} ${splitDate[2]}`;
        yesterdayDate = moment(onlyDate+" 23:59:59", 'YYYY-MMM-DD HH:mm:ss').unix();    // yesterday date end time.
        promoCodeModel.aggregate([
            {
                $match : {
                    endingDate : { $lte :  yesterdayDate},
                    status : 1
                }
            }
        ],(err, resp) => {
            if(err)
                return res.status(errors.InternalServerError.code).send(errors.InternalServerError);
            
            if(resp.length > 0) {
                var updations;
                updations = resp.map((data) => {
                    var conditions = { _id: data._id }
                            , update = { status: 0, modifiedDate : moment().unix()}
                            , options = { multi: true };
                    promoCodeModel.update(conditions, update, options,(updateErr, updatedRecords) => {
                        if(updateErr)
                            return res.status(errors.InternalServerError.code).send(errors.InternalServerError);
                        if(updatedRecords) {
                            console.log('updated records');
                            console.log(data);
                            return data;
                        }
                    });
                });
                // updatedRecords
                return res.status(200).send({status : 1, data : updations, message : 'Promo Codes updated successfully.'});
            }
            else {
                return res.status(200).send({status : 0, data : [], message : 'All promo codes already updated.'});
            }
        });
    }



}
module.exports = promoCodeController;