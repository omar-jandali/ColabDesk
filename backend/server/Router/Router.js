const router = require('express').Router();
const controller = require('../Controllers/UserController')


router.route('/user')
    .get(controller.get)


module.exports = router;