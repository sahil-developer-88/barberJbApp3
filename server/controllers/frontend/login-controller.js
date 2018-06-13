module.exports = function(express) {
    let router = express.Router();
    var bcrypt = require('bcrypt');
    const saltRounds = 10;
    const myPlaintextPassword = 's0/\/\P4$$w0rD';
    const passport=require('passport');

    router.post("/login",
    // passport.authenticate('local', { successRedirect : '/api/frontend/loginSuccess', failureRedirect: '/api/frontend/loginError' }));
    passport.authenticate('local', { failureRedirect: '/api/frontend/loginError' }), (req, res) => {
        console.log('login');
        console.log(req.user);
        return res.status(200).send({ status : 1, message : req.user });
    });

    // router.get("/loginSuccess",(req, res)=>{
    //     console.log('login');
    //     console.log(req.user);
    //     return res.status(200).send({ status : 1, message : req.user });
    // });

    router.get("/loginError",(req, res)=>{
        console.log('loginError');
        return res.status(200).send({ status : 0, message : 'User Not Authorized.' });
    });

    router.get("/checkLogin",(req,res)=>{
        // console.log('user logged in');
        result=[];
        if(req.isAuthenticated())
        {
            var name = req.user.firstName;
            if(req.user.lastName)
            {
                var name = req.user.firstName + req.user.lastName;
            }
            return res.status(200).send({status:1,name:name});
        }
        else
        {
            return res.status(200).send({status:0,name:''});
        }
    });
    router.get("/logout",(req,res)=>{
        req.logout();
        req.session.destroy();
        loginSessionValue=false;
        res.json(loginSessionValue);
        
    });
    return router;
}

// var bcrypt = require('bcrypt');
// const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const passport=require('passport');


// var frontController = {
//     login: function(req, res, next) {
//         const userLoginSchema = require('../../database/models/userRegistration');
//         // check login details
//         console.log('enter');
//         console.log(req.body.email);
//         console.log(req.body.password);
//         passport.authenticate('local', function(err, user) {
//             if (err) { 
//                 console.log('errorr');
//                 return next(err); }
//             if (!user) { 
//                 console.log('not user details');
//                 console.log(user);
//                 return res.redirect('/login'); }

//                 req.logIn(user, function(err) {
//                     if (err) { return next(err); }
//                     return res.redirect('/users/' + user.username);
//                 });
//           })(req, res, next);;


//         // userLoginSchema.find({ email: req.body.email }, (error, docsLogin) => {
//         //     if (error) {
//         //         console.log(error);
//         //     }
            
//         //     if (docsLogin.length > 0) {
//         //         console.log('login');
//         //         bcrypt.compare(req.body.password, docsLogin[0].password, function (error, response) {
                    
//         //             if (response == true) {
//         //                 req.session.loginSession = true;    // when user will be login.   
//         //                 req.session.loginId=docsLogin[0]._id;   
//         //                 var name=docsLogin[0].firstName+' '+docsLogin[0].lastName;  
//         //                 var result={isLogin:response,name:name};
//         //                 res.send(result);
//         //             }
//         //             else {
//         //                 var result={isLogin:response,name:''};
//         //                 res.send(result);
//         //             }

//         //         });
//         //     }
//         //     else {
//         //         var result={isLogin:false,name:''};
//         //         res.send(result);
//         //     }

//         // });
//     },
//     checkLogin : function(req, res) {
//         const loginDetails = require('../../database/models/userRegistration');
//         var loginSessionValue, name;
//         console.log(req.session);
//         if (!req.session.loginSession) {
//             // console.log(req.session.loginSession);
//             req.session.loginSession = false;

//             console.log(req.session.loginSession);
//             loginSessionValue=false;
//             var result={loginSessionValue: loginSessionValue, name: null};
//             res.send(result);
//         }
//         else {
//             if (req.session.loginSession == true) {
//                 console.log(req.session.loginSession);
//                 loginSessionValue=true;
//                 loginDetails.findOne({_id:req.session.loginId},(err,docs)=>{
//                     name=docs.firstName+' '+docs.lastName;
//                     var result={loginSessionValue: loginSessionValue, name: name};
//                     res.send(result);
//                 });            
//             }
//         }
//     }
// }

// module.exports = frontController;