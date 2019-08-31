const router = require('express').Router();
const userController = require('../Controllers/UserController')


router.route('/user')
    .post(userController.post)

router.route('/user/:id')
    .get(userController.get)




module.exports = router;