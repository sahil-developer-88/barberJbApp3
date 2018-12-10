module.exports = function(express) {
    const router = express.Router();
    const passport = require('passport');
    const jwt = require('jsonwebtoken');
    // router.post('/checkLogin',passport.authenticate('local',{failureRedirect : '/api/frontend/loginError'}),(req,res) => {
    //     console.log('login user');
        
    //     res.status(200).send({status : 1, data : req.user, message : 'User is authorised.' });
    // });
    
    router.post('/checkLogin',passport.authenticate('local',{failureRedirect : '/api/backend/loginError'}),(req,res) => {
        console.log('login user2'); 
        const token = jwt.sign('sahil', 'secret_key');
        console.log(req.user);
        return res.status(200).send({status : 1, data : {user : req.user, token : token}, message : 'User is authorised2.' }); 
    });    

    router.get('/loginError',(req, res)=> { 
        console.log('loginError2');
        return res.status(200).send({ status : 0, message : 'User Not Authorized.'});
    });
    return router; 
}