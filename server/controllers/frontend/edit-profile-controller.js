var frontController = {
    getProfileInfo: function(req, res) {
        const userData = require('../../database/models/userRegistration');
        userData.findOne({_id:req.user._id},(err,docs)=>{
            if(err)
            {
                console.log('error occurred');
                return false;
            }
            res.send(docs);
        });
    },
    updateProfile: function(req, res) {
        
    const userData = require('../../database/models/userRegistration');
    var conditions, update, options;
    var result;



    userData.findOne({_id:req.body.userId},(err,docs)=>{
        if(err)
        {
            console.log('error');
            return false;
        }
        
        if(req.body.city == docs.city && req.body.email == docs.email && req.body.firstName == docs.firstName && req.body.lastName == docs.lastName && req.body.phoneNumber == docs.phoneNumber && req.body.state == docs.state && req.body.newPassword == null)
        {
            result={result:2};
            res.send(result);
        }
        else
        {            
            if(req.body.newPassword == null)
            {                
                conditions = { _id: req.body.userId }
                , update = { firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, city: req.body.city, state: req.body.state, phoneNumber: req.body.phoneNumber }            
                , options = { multi: true };
                userData.update(conditions, update, options, function(err,numAffected){                
                if(numAffected.ok == 1 && numAffected.nModified == 1)
                {
                    result={result:1};
                    res.send(result);
                }
                else
                {
                    result={result:0};
                    res.send(result);                    
                }
            });

            }
            else
            {                
                var bcrypt = require('bcrypt-nodejs');
                const saltRounds = 10;
                const myPlaintextPassword = req.body.newPassword;                
                bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {                
                    conditions = { _id: req.body.userId }
                    , update = { firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, city: req.body.city, state: req.body.state, phoneNumber: req.body.phoneNumber, password: hash }            
                    , options = { multi: true };

                    userData.update(conditions, update, options, function(err,numAffected){                
                        if(numAffected.ok == 1 && numAffected.nModified == 1)
                        {
                            result={result:1};
                            res.send(result);                             
                        }
                        else
                        {
                            result={result:0};
                            res.send(result);
                        }
                    });      
                });

            }
            

            
            
        }
    });
    
    }
}

module.exports = frontController;