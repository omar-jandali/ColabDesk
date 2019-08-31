const { User } = require('../../database/models/User');


const controller = {
    get: (req, res) => {
        let user_id = req.params.id
        console.log(user_id)
        User.findByPk(user_id)
            .then((response) => {
                let data = response.dataValues
                res.status(200).send(data)
            })
            .catch((err) => {
                console.log('Getting user by Id error: ' + JSON.stringify(err))
            })    
    },
    post: (req, res) => {
        console.log(req.body);
        let data = req.body;
//        res.send('post')
        User.create(data)
            .then( () => {
                res.status(201).send('New User');
            })
            .catch((err) => {
                console.log("Creating a user error: " + JSON.stringify(err))
            })
    }
};


module.exports = controller;