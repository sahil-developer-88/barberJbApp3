var frontController = {
    saveUserInfo: function(req, res) {
        const userRegistrationSchema = require('../../database/models/userRegistration');
        
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
                        }
                        result = {
                            email : userSave.email,
                            password : userSave.password,
                            userCreationStatus: userCreationStatus,
                            emailAlreadyExist: emailExistStatus
                        };
                        res.send(result);
                    }));
                });
            }
        });
    }
}

module.exports = frontController;