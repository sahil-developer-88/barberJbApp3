module.exports = function(express) {
    const router = express.Router();
    const categoryModel = require('../../database/models/serviceCategories');
    const serviceModel = require('../../database/models/serviceTypes');
    const paymentModel = require('../../database/models/payment');
    var errors = require('../../shared/msg');
    var mongoose = require('mongoose');
    const moment = require("moment");
    const multer = require("multer");
    var storage = multer.diskStorage({
        destination : function(req, file, cb) {
            var nameSplit=file.originalname.split(".");
            nameSplit[nameSplit.length-2]=nameSplit[nameSplit.length-2]+'_'+moment().unix();
            file.originalname = nameSplit.join(".");
            cb(null, './src/assets/images/');
        },
        filename : function(req, file, cb) {
            cb(null, file.originalname);
        }
    });
    var upload = multer({storage: storage});

    router.post("/serviceList",function(req, res) {
        const startIndex = parseInt(req.body.startIndex);
        const pageSize = parseInt(req.body.pageSize);
        serviceModel.aggregate([
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
                    from : 'categories-data',
                    localField : 'serviceId',
                    foreignField : '_id',
                    as : 'categoryData'
                }
            },
            {
                $unwind : '$categoryData'
            },
            {
                $project : {
                    category : { _id :"$serviceId", gender : "$categoryData.gender", services : "$categoryData.services" },
                    service : "$serviceTypeName",
                    image : "$image",
                    price : "$price",
                    timeSlotsDuration : "$timeSlotsDuration",
                    createdDate : "$createdDate"
                }
            }
        ],(err, response) => {  
            if(err)
                return err;
            if(response) {
                res.status(200).send(response);
            }

        });
    });

    router.get("/serviceRecordsLength",function(req, res) {
        const serviceModel = require('../../database/models/serviceTypes');
        serviceModel.aggregate([
            {
                $project : {
                    _id : 0
                }
            }
        ],(err, response) => {
            if(err)
                return err;
                
                res.status(200).send({count :response.length});
        });
    });

    router.get("/categoriesList",(req, res) => {
        categoryModel.find({},(err, response) => {
            res.send(response);
        })
    });

    router.post("/addService",upload.single('image'),(req, res) => {
        var serviceQuery;
        const todayDate = moment().unix();
        
        if(!req.body)
            return res.status(errors.MissingRequiredData.code).send(errors.MissingRequiredData);
        
        // console.log(req.body.category+' '+req.body.service+' '+req.body.price)
        if(!req.body.category || !req.body.service || !req.body.price || !req.file || !req.body.timeSlotsDuration || !req.body.pageSize)
            return res.status(errors.MissingRequiredData.code).send(errors.MissingRequiredData);
        
        const fileStatus = req.file.mimetype.split("/")[0] == "image" ? 1 : 0;
        if(fileStatus == 0)
            return res.status(200).send({status : 0, data : [], message : "Only image extension is allowed."});
        

        const categoryId = req.body.category;
        const serviceTypeName = req.body.service;
        const price =  req.body.price;
        const timeSlotsDuration = req.body.timeSlotsDuration;
        const image = `/assets/images/${req.file.originalname}`;
        const pageSize = parseInt(req.body.pageSize);
        const startIndex = 0;

        serviceModel.aggregate([
            {
                $match : {
                    serviceId : mongoose.Types.ObjectId(categoryId),
                    serviceTypeName : serviceTypeName
                }
            }
        ],(err, response) => {
            console.log('in query');
            if(err) 
                return res.status(errors.InternalServerError.code).send(errors.InternalServerError);
            
            if(response.length > 0) {
                return res.status(200).send({status : 0, message : 'Service Already Exists.', data : []});                
            }
            else {
                if(response.length == 0) {
                    serviceQuery  = new serviceModel({serviceId : mongoose.Types.ObjectId(categoryId), serviceTypeName :  serviceTypeName, price : price, timeSlotsDuration : timeSlotsDuration, image : image, createdDate : todayDate });
                    serviceQuery.save().then((serviceRecord) => {
                        if(serviceRecord)
                            serviceModel.aggregate([
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
                                        from : 'categories-data',
                                        localField : 'serviceId',
                                        foreignField : '_id',
                                        as : 'categoryData'                                        
                                    }
                                },
                                {
                                    $unwind : '$categoryData'
                                },
                                {
                                    $project : {
                                        _id : 0,
                                        category : { gender : "$categoryData.gender", services : "$categoryData.services" },
                                        service : "$serviceTypeName",
                                        image : "$image",
                                        price : "$price",
                                        timeSlotsDuration : "$timeSlotsDuration",
                                        createdDate : "$createdDate"
                                    }
                                }
                            ],(listErr, response) => {
                                if(listErr)
                                    return res.status(errors.InternalServerError.code).send(errors.InternalServerError);
                                console.log('listing');
                                console.log(response);
                                res.status(200).send({status : 1, message : 'Service Created Successfully', data : response });
                            });   
                            
                    });
                }   
                else
                    return res.status(errors.InternalServerError.code).send(errors.InternalServerError);
            }

        });
    });

    // update/edit service record
    router.post("/updateService",upload.single('image'),(req, res) => {
        if(!req.body)
            return res.status(errors.MissingRequiredData.code).send(errors.MissingRequiredData);
        
        if(!req.body._id || !req.body.category || !req.body.service || !req.body.price || !req.body.timeSlotsDuration)
            return res.status(errors.MissingRequiredData.code).send(errors.MissingRequiredData);
        const _id = req.body._id;
        const categoryId = req.body.category;
        const service = req.body.service;
        const price = req.body.price;
        const timeSlotsDuration = req.body.timeSlotsDuration;
        var conditions, update, options;
        var updatedImage;

        const fileStatus = req.file ? req.file.mimetype.split("/")[0] == "image" ? 1 : 2 : 0;
        console.log(_id);        
        serviceModel.aggregate([
            {
                $match : {
                    _id : mongoose.Types.ObjectId(_id)
                }
            },
            {
                $lookup : {
                    from : 'categories-data',
                    localField : 'serviceId',
                    foreignField : '_id',
                    as : 'categoryData'                                        
                }
            },
            {
                $unwind : '$categoryData'
            },
            {
                $project : {
                    category : { _id : "$categoryData._id",gender : "$categoryData.gender", services : "$categoryData.services" },
                    service : "$serviceTypeName",
                    image : "$image",
                    price : "$price",
                    timeSlotsDuration : "$timeSlotsDuration",
                    createdDate : "$createdDate"
                }
            }
        ],(err, response)=> {
            if(err)
                return res.status(errors.InternalServerError.code).send(errors.InternalServerError);
            if(response.length > 0) {
                console.log('come here');
                console.log(response);
                // if image does not exist
                if(fileStatus == 0)
                {
                    conditions = { _id: _id };
                    update = { serviceId: mongoose.Types.ObjectId(categoryId), serviceTypeName : service, price : price, timeSlotsDuration : timeSlotsDuration};
                    options = { multi: true };
                    updatedImage = response[0].image;
                }
                else {
                    if(fileStatus == 1)
                    {
                        const image = `/assets/images/${req.file.originalname}`;
                        conditions = { _id: _id };
                        update = { serviceId: mongoose.Types.ObjectId(categoryId), serviceTypeName : service, price : price, image : image, timeSlotsDuration : timeSlotsDuration};
                        options = { multi: true };
                        updatedImage = image;
                    }      
                }
                serviceModel.update(conditions, update, options,(updateErr, updateStatus) => {
                    if(updateErr)
                        return res.status(errors.InternalServerError.code).send(errors.InternalServerError);

                        if(updateStatus.ok == 1 && updateStatus.nModified == 1) {
                            const data = { category : { _id : response[0].category._id,gender : response[0].category.gender, services : response[0].category.services }, _id : response[0]._id, service : service, price : price, image : updatedImage, timeSlotsDuration : timeSlotsDuration, createdDate : response[0].createdDate };
                            console.log('service data');
                            console.log(data);
                            return res.status(200).send({status : 1, message : 'Category Updated Successfully.', 'data' : data});
                        }
                        else {
                            errors.InternalServerError.title = "Updation Failure Error";
                            errors.InternalServerError.message = "Updation Failure Error Occurred";
                            return res.status(errors.InternalServerError.code).send(errors.InternalServerError);
                        }
                }); 
            }
            else {
                res.status(200).send({status: 0, message : "Service does not exist.", data : []});
            }
            
        });
        
        
        
    });

    
    return router;
}


