var serviceController = {
    serviceList : function(req, res) {
        const categoryModel = require('../../database/models/serviceCategories');
        const serviceModel = require('../../database/models/serviceTypes');
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
                    _id : 0,
                    category : { gender : "$categoryData.gender", category : "$categoryData.services" },
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
    },
    serviceRecordsLength : function(req, res) {
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
    }
}
module.exports = serviceController;