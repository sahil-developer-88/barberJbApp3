const passport=require('passport');
const LocalStrategy =  require('passport-local').Strategy;
const userModel = require('./models/userRegistration');
const bcrypt = require('bcrypt');

passport.serializeUser((user,done)=>{
    done(null,user.id);
});
passport.deserializeUser((userId,done)=>{
    userModel.findOne({_id:userId},(err,userDetail)=>{
        done(err,userDetail);
    });
    
})

// passport-local
// note : input field must be username.
passport.use(new LocalStrategy(
    function(email, password, done) {
        console.log('enter1');
        // var email = username;
        console.log(email);
        console.log(password);
        
        userModel.findOne({email : email}, (err, user) => {
            if(err) {
                console.log('err');
                return done(err);
            }
            if(!user)
            {
                console.log('!user');
                console.log(user);
                return done(null, false);
            }

            user.comparePassword(password, function(pwdErr,isMatch) {
                console.log('beg');
                if(pwdErr) {
                    console.log('comming');
                    return done(null, false);
                }
                if(!isMatch)
                {
                    return done(null, false);    
                }
                return done(null, user);
            });
        });
    }
));

module.exports=passport;