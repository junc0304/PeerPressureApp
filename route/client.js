const express = require('express');
const APP_CONSTANTS = require('../util/constants/constants');
const HttpErrorHandler = require('../classes/httpErrorHandler/httpErrorHandler');

const router = express.Router();

router.post('./api/v1/createNewUser', async (req, res, next) => {
    const userController = req.container.resolve('userController');

    var result;
    
    try  {
        result = userController.create(req.body.user);
    } catch(err) {
        throw new HttpErrorHandler(400, err);
    }

    return result;
});