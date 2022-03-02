const { User } = require('../models');

const getUsers = async (req, res) => {
    try {
        const userData = await User.find()
        res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err)
    }
}

const getSingleUser = async (req, res) => {
    try {
        const userData = await User.findOne({ _id: req.params.id })
            .select('-__v')
            .populate('thoughts')
            .populate('friends')
        !userData ? res.status(404).json('User does not exist') : res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err)
    }
}

const createUser = async (req, res) => {
    try {
        const userData = await User.create(req.body)
        res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err)
    }
}

const updateUser = async (req, res) => {
    try {
        const userData = await User.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        )
        !userData ? res.status(404).json('User does not exist') : res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err)
    }
}

const deleteUser = async (req, res) => {
    try {
        const userData = await User.deleteOne(
            { _id: req.params.id }
        )
        !userData ? res.status(404).json('User does not exist') : res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err)
    }
}

const addFriend = async (req, res) => {
    try {
        const userData = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { new: true }
        )
        !userData ? res.status(404).json('User does not exist') : res.status(200).json(userData)
    } catch (err) {
        err => res.status(500).json(err)
    }
}

const deleteFriend = async (req, res) => {
    try {
        const userData = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { new: true }
        )
        !userData ? res.status(404).json('User does not exist') : res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = { getUsers, getSingleUser, createUser, updateUser, deleteUser, addFriend, deleteFriend }