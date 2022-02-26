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

const getSingleUser = (req, res) => {
    User.findOne({ _id: req.params.id })
        .populate({
            path: 'thoughts',
            select: '-__V'
        })
        .select('-__v')
        .then(userData => {
            !userData ? res.status(404).json('User does not exist') : res.status(200).json(userData)
        })
        .catch(err => res.status(500).json(err))
} 

const createUser = (req, res) => {
    User.create(req.body)
    .then(userData => res.status(200).json(userData))
    .catch(err => res.status(500).json(err))
}

const updateUser = (req, res) => {
    User.findOneAndUpdate(
        {_id: req.params.id},
        req.body
    )
    .then(userData => !userData ? res.status(404).json('User does not exist') : res.status(200).json(userData))
    .catch(err => res.status(500).json(err))
}

const deleteUser = (req, res) => {
    User.deleteOne(
        {_id: req.params.id}
    )
    .then(userData => !userData ? res.status(404).json('User does not exist') : res.status(200).json(userData))
    .catch(err => res.status(500).json(err))
}

module.exports = { getUsers, getSingleUser, createUser, updateUser, deleteUser }