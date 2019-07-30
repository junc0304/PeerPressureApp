
/**
 *  Basic api body: /api/v1/user
 */

const express = require('express');
const APP_CONSTANTS = require('../util/constants/constants');
const HttpErrorHandler = require('../classes/httpErrorHandler/httpErrorHandler');

const router = express.Router();


// POST

router.post('./api/v1/user/create', async (req, res, next) => {
    const userController = req.container.resolve(APP_CONSTANTS.USER_CONTROLLER);
    
    try  {
        res.send( userController.create( new User.fromJSON(req.body.user)) );
    } catch(err) {
        throw new HttpErrorHandler(400, err);
    }
});

router.post('./api/v1/user/update', async (req, res, next) => {
    const userController = req.container.resolve(APP_CONSTANTS.USER_CONTROLLER);
    
    try  {
        res.send( userController.update( new User.fromJSON(req.body.user)) );
    } catch(err) {
        throw new HttpErrorHandler(400, err);
    }
});

router.post('./api/v1/user/delete', (req, res, next) => {
    const userController = req.container.resolve(APP_CONSTANTS.USER_CONTROLLER);

    try {
        res.send( userController.delete( new User.fromJSON(req.body.user)) );
    } catch(err) {
        throw new HttpErrorHandler(400, err);
    }
});

router.post('./api/v1/user/getById', (req, res, next) => {
    const userController = req.container.resolve(APP_CONSTANTS.USER_CONTROLLER);

    try {
        res.send( userController.getUserById(req.body.userId) );
    } catch(err) {
        throw new HttpErrorHandler(400, err);
    }
});

router.post('./api/v1/user/filter', (req, res, next) => {
    const userController = req.container.resolve(APP_CONSTANTS.USER_CONTROLLER);

    try {
        res.send( userController.filter( new UserFilterModel.fromJSON(req.body.userFilter)) );
    } catch(err) {
        throw new HttpErrorHandler(400, err);
    }
});

// GET

router.get('./api/v1/user/getAll', (req, res, next) => {
    const userController = req.container.resolve(APP_CONSTANTS.USER_CONTROLLER);

    try {
        res.send( userController.getAll() );
    } catch(err) {
        throw new HttpErrorHandler(400, err);
    }
});

