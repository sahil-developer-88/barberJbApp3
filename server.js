// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const passport=require('passport');
const passportSetup=require('./server/database/passport.config');
var cookieParser = require('cookie-parser');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const dbConnection = require('./server/database/models/connection');
// Get our API routes
// const api = require('./server/routes/api');

const app = express();


app.use(function (req, res, next) {
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// var app = express();


// app.use(cookieParser());
// app.use(session({
//     secret: 'sessionTesting',
//     saveUninitialized: false,
//     resave: false
// })); 

app.use(session({
    secret: 'sessionTesting',
    store: new MongoStore({
        mongooseConnection: dbConnection,
        ttl: 3600 * 24 * 60, // 2 months
        touchAfter: 3600 * 24 * 2
    }),
    unset: 'destroy',
    cookie: { maxAge: (3600000 * 24 * 60) }, // 2 months
    resave: false,
    saveUninitialized: true
})); 


// passport session initialization
app.use(passport.initialize());
app.use(passport.session());

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'public')));

// Set our api routes
// app.use('/api', api);

var routes = require('./server/routes/router')(app);
app.use(routes);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));