var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

var auth = require('./auth.js');
var stores = require('./stores.js');
var user = require('./users.js');

// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

/*
 * Routes that can be accessed by any one
 */
router.post('/login',urlencodedParser, auth.login);

/*
 * Routes that can be accessed only by autheticated users
 */
router.get('/api/v1/stores', urlencodedParser, stores.getAll);
router.get('/api/v1/store/:id', stores.getOne);
router.post('/api/v1/store/', stores.create);
router.put('/api/v1/store/:id', stores.update);
router.delete('/api/v1/store/:id', stores.delete);

/**
 *
 * User routes
 *
 */
 router.get('/api/v1/users', urlencodedParser, user.getAll)


/*
 * Routes that can be accessed only by authenticated & authorized users
 */
router.get('/api/v1/admin/users', user.getAll);
router.get('/api/v1/admin/user/:id', user.getOne);
router.post('/api/v1/admin/user/', user.create);
router.put('/api/v1/admin/user/:id', user.update);
router.delete('/api/v1/admin/user/:id', user.delete);

module.exports = router;
