const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const router = express.Router();

const isProdctuon = process.env.NODE_ENV === 'production';
const keys = require('./config/keys');

// Router
const userRoute = require('./route/client');

//db connection

//model

//Ioc
require('./ioc');

app.use((req, res, next) => {
    req.container = global.container;
    next();
});

//security
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// register Routers
app.use(userRoute);

// developer speicific configuration goes here
if(!isProdctuon) {
    
}

const port = process.env.PORT || 5666;
app.listen(port, () => console.log('Server is up and running on port: ', port));


