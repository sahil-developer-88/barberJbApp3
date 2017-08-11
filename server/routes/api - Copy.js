const express = require('express');
const router = express.Router();
// var routes = require('./route');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

// var body = require('body-parser');
/* 
// 24-5-17
// paypal integration
var paypal = require('paypal-rest-sdk');
// var fs = require('fs');

var paypalCredentials = {
    // "port": 5000,
    "api": {
        "host": "api.sandbox.paypal.com",
        "port": "",
        "client_id": "AfZs659JhohhwBS4f68AIY5pe9n-roJ1paZLQbALU6Qi_vHOc5vt0riKMnPQSLu13jsc7E-Cj-d6FzG4",
        "client_secret": "EA3fr3ntdBsWLGC4DeN5UO1kqTsnUfcl8bZXek6mqthc1wqJoGDrZn4AyVnm3IdRXyL3Cc6T6Zh2rruc"
    }
};
paypal.configure(paypalCredentials);

*/




// var paypal = require('paypal-rest-sdk');
/* try {
    // var configJSON = fs.readFileSync(__dirname + "/config.json");
    // var config = JSON.parse(configJSON.toString()); 

    

} catch (e) {
    console.error("File config.json not found or is invalid: " + e.message);
    process.exit(1);
} */







var Schema = mongoose.Schema;
var userDataSchema = new Schema({
    title: {type:String, required: true},
    content: String,
    author: String
}, {collection: 'user-data'});

var userData = mongoose.model('userData',userDataSchema);





// declare axios for making http requests
/* const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com'; */


// app.get('/', routes.demo);


/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

var hairStylesSchema = new Schema({
    gender: String,
    name: String,
    imgUrl: String
}, { collection: 'hair-style-data' });

var hairStyleData = mongoose.model('hairStyleData', hairStylesSchema);


// insert hairstyles
router.get('/hairStylesInsertion', (req, res) => {



    // gender 1 for girl and 2 for boy
    var item = [{
        gender: '1',
        name:'a',
        imgUrl:'/assets/images/sliderImg1.jpg'
    },
    {
        gender: '2',
        name:'b',
        imgUrl: '/assets/images/sliderImg2.jpg'
    },
    {
        gender: '1',
        name: 'c',
        imgUrl: '/assets/images/sliderImg3.jpg'
    },
    
    {
        gender: '2',
        name: 'd',
        imgUrl: '/assets/images/sliderImg4.jpg'
    }
];

/*    hairStyleData.remove({}, function (err) {
        console.log('collection removed');
    }).exec();   
    

    return false; */
   



    // get content of hairstyleData 
    hairStyleData.find({}, (err, docs) => {        
        if(docs.length > 0)
        {
            // no need to save again data in hairStyleData model
            console.log('data exist');
            res.send(docs);
        }
        else
        {
            console.log('data not exists');
            
            // console.log('hii');
            // save data in hairStyleData model
            for (var i = 0; i < item.length; i++)
            {
                var hairData = new hairStyleData(item[i]);
                hairData.save();
                
            }
            hairStyleData.find({}, (err1, docs1) => {
                // console.log(docs1);
                res.send(docs1);
            });
            
        }
    });

}); 

router.post('/saveUserInfo', (req, res) => {
    // console.log(req);
    // console.log(JSON.parse(req.body));
    // var arr = eval('(' + req.body + ')');
    // console.log(req.body.firstName1);
    
    console.log(req.body);
    res.json('hello');
});

router.get('/payment', (req, res) => {
    /*    // 24-5-17
    var payment = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://yoururl.com/execute",
            "cancel_url": "http://yoururl.com/cancel"
        },
        "transactions": [{
            "amount": {
                "total": "1.00",
                "currency": "USD"
            },
            "description": "My awesome payment"
        }]
    }; 
    


    
    paypal.payment.create(payment, function (error, payment) {
        if (error) {
            console.log(error);
        } else {
            if (payment.payer.payment_method === 'paypal') {
                req.session.paymentId = payment.id;
                var redirectUrl;
                for (var i = 0; i < payment.links.length; i++) {
                    var link = payment.links[i];
                    if (link.method === 'REDIRECT') {
                        redirectUrl = link.href;
                    }
                }
                res.redirect(redirectUrl);
            }
        }
    }); */
    res.json('abc');
});



// Get all posts
router.get('/posts', (req, res) => {
    // Get posts from the mock api
    // This should ideally be replaced with a service that connects to MongoDB
    /* axios.get(`${API}/posts`)
      .then(posts => {
          res.status(200).json(posts.data);
      })
      .catch(error => {
          res.status(500).send(error)
      }); */

    
    var item = {
        title: 'sahil title',
        content: 'sahil content',
        author: 'sahil.author'
    };

    var data = new userData(item);
    data.save();

    userData.find({}, function (err, docs) {
        // res.json(docs);
        res.send(docs);
    });
           





});

module.exports = router;