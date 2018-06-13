var frontController = {
    thanksPageValidation: function(req, res) {
        const payment = require('../../database/models/payment');
        var thanksValue;
        var result;
        var showFormStatus;    
        // req.session.thanks=true;
        if(!req.session.thanks)
        {
            thanksValue=false;
            result={thanksValue: thanksValue };        
            res.send(result);
        }
        else
        {
            if(req.session.thanks == true)
            {
                thanksValue=true;            
                result={thanksValue: thanksValue};
                res.send(result);
    
    
                
            }
            else
            {
                if(req.session.thanks == false)
                {
                    thanksValue=false;                            
                    result={thanksValue: thanksValue};
                    res.send(result);                
                }
            }
        }
    },
    feedbackForm: function(req, res) {
        
    const paymentSchema = require('../../database/models/payment.js');
    var stars=req.body.stars;
    var review=req.body.review;
    var updationStatus;
    paymentSchema.find({},(err,docs)=>{
        if(docs[docs.length - 1].bookingType == 2)
        {
            var conditions = { _id: docs[docs.length - 1]._id }
            , update = { stars: stars, review: review }
            , options = { multi: true };
            payment.update(conditions, update, options, function(err,numAffected){      
                if(numAffected.ok == 1)
                {
                    res.send({updationStatus: 1});
                }
                else
                {
                    res.send({updationStatus: 0});
                }
            });
        }
        else
        {
            res.send({updationStatus: 0});
        }
    });
    }
}

module.exports = frontController;