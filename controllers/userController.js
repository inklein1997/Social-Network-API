const { User } = require('../models');

const getUsers = (req, res) => {
    User.find()
        .then(userData => res.status(200).json(userData))
        .catch(err => res.status(500).json(err))
}

const getSingleUser = (req, res) => {
    User.findOne({ _id: req.params.id })
        .select('-__v')
        .populate('thoughts')
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
        { _id: req.params.id },
        req.body
    )
        .then(userData => !userData ? res.status(404).json('User does not exist') : res.status(200).json(userData))
        .catch(err => res.status(500).json(err))
}

const deleteUser = (req, res) => {
    User.deleteOne(
        { _id: req.params.id }
    )
        .then(userData => !userData ? res.status(404).json('User does not exist') : res.status(200).json(userData))
        .catch(err => res.status(500).json(err))
}

const addFriend = (req, res) => {
    User.findOneAndUpdate(
        { id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } }
    )
        .then(userData => !userData ? res.status(404).json('User does not exist') : res.status(200).json(userData))
        .catch(err => res.status(500).json(err))
}

const deleteFriend = (req, res) => {
    User.findOneAndUpdate(
        { id: req.params.userId },
        { $pull: { friends: req.params.friendId } }
    )
        .then(userData => !userData ? res.status(404).json('User does not exist') : res.status(200).json(userData))
        .catch(err => res.status(500).json(err))
}

module.exports = { getUsers, getSingleUser, createUser, updateUser, deleteUser, addFriend, deleteFriend }