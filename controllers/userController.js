const { User } = require('../models');

    const getUsers = (req, res) => {
        User.find()
            .populate({
                path: 'thoughts',
                select: '-__V'
            })
            .select('-__v')
            .then(userData => res.status(200).json(userData))
            .catch(err => res.status(500).json(err))
    }




module.exports = { getUsers }