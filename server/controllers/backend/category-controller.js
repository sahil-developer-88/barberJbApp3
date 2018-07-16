var errors = require('../../shared/msg');
var categoryController = {

    categoryList: function(req, res) {
        const categoryModel = require('../../database/models/serviceCategories');
        const startIndex = parseInt(req.body.startIndex);
        const pageSize = parseInt(req.body.pageSize);
        categoryModel.aggregate([
                {
                    $sort : {
                        createdDate : -1
                    }
                },
                {
                    $limit : startIndex + pageSize
                },
                {
                    $skip : startIndex
                }
        ],(err, response) => {
            if(response.length > 0)
                res.status(200).send(response);
            else
                res.status(200).send([]);
        });
    },
    categoryRecordsLength : function(req, res) {
        const categoryModel = require('../../database/models/serviceCategories');
        categoryModel.aggregate([
            {
                $project : {
                    _id : 0
                }
            }
        ],(err, response) => {
            if(err)
                return err;

            if(response.length > 0) {
                res.status(200).send({status : 1, data : response.length});
            }
            else {
                res.status(200).send({status : 0, data : response.length});
            }
        });
    },
    updateCategory : (req,res) => {
        const categoryModel = require('../../database/models/serviceCategories');
        const mongoose = require('mongoose');
        const _id = req.body._id;
        const gender = parseInt(req.body.gender);
        const services = req.body.services;

        categoryModel.aggregate([
            {
                $match : {
                    gender : gender,
                    services : services
                }
            },
            {
                $project : {
                    _id : 1
                }
            }
        ], (err, response) => {
            if(err) {
                return err;
            }
            if(response.length > 0) {
                res.status(200).send({status : 0, message :'Category details already exists.'});
            }
            else {
                var conditions = { _id: _id }
                , update = { gender: gender, services : services}
                , options = { multi: true };
                categoryModel.update(conditions, update, options,(err, numAffected) => {
                    if(err)
                        return err;
                    if(numAffected.ok == 1 && numAffected.nModified == 1) {
                        res.status(200).send({status : 1, message : 'Category Updated Successfully.'});
                    }
                    else {
                        if(numAffected.ok == 1 && numAffected.nModified == 0) {
                            res.status(200).send({status : 0, message : 'No changes made.'});
                        }
                        else {
                            res.status(200).send({status : 0, message : 'Record updation failure error.'});
                        }
                    }
                });
            }
        });
    },
    addCategory : (req, res) => {
        const moment = require("moment");
        const categoryModel = require('../../database/models/serviceCategories');
        const todayDate = moment().unix();
        const startIndex = 0;
        
        if(req.body) 
            return res.status(errors.MissingRequiredData.code).send(errors.MissingRequiredData);

        if(!req.body.gender || !req.body.services || !req.body.pageSize)
            return res.status(errors.MissingRequiredData.code).send(errors.MissingRequiredData);

        const gender = req.body.gender;
        const pageSize = req.body.pageSize;
        const category = req.body.services;
        console.log(gender);
        // check if category and gender already exists.
        categoryModel.aggregate([
            {
                $match : {
                    "gender" : parseInt(gender),
                    "services" : category
                }
            }
        ],(err, response) => {
            if(err)
                return err;
            if(response.length > 0) {
                res.status(200).send({status : 1, message : 'Category already exists.', data : []});
            }
            else {
                // create category
                const query = new categoryModel({gender : gender, services : category, createdDate : todayDate});
                query.save().then((categoryRecord) => {
                    if(categoryRecord) {
                        // get categories list for the first page

                        categoryModel.aggregate([
                            {
                                $sort : {
                                    createdDate : -1
                                }
                            },
                            {
                                $limit : startIndex + parseInt(pageSize)
                            }
                        ],(err, list) => {
                            if(err) {
                                console.log('error in api');
                                return res.status(500).send({name: 'INTERNAL_SERVER_ERROR',
                                title: 'Internal Server Error',
                                msg: 'Internal Server Error occured.'});
                            }
                            res.status(200).send({status : 1, message : 'Category created successfully.', data : list });
                        });

                    }
                    else {
                        res.status(200).send({status : 0, message : 'Category creation failure error', data : []});
                    }
                });
            }
        });
    }
}

module.exports = categoryController;