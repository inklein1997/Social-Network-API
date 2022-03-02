const { Thought, User } = require('../models');
const { ObjectId } = require('mongoose')

const getThoughts = async (req, res) => {
    try {
        const thoughtData = await Thought.find();
        console.log(thoughtData)
        res.status(200).json(thoughtData)
    } catch (err) {
        res.status(500).json(err)
    }
}

const getSingleThought = async (req, res) => {
    try {
        const thoughtData = await Thought.findById({ _id: req.params.id })
        console.log(thoughtData)
        // .select('-__v')
        // .populate('reactions')
        !thoughtData ? res.status(404).json('Thought does not exist') : res.status(200).json(thoughtData)
    } catch (err) {
        res.status(500).json(err)
    }
}

const createThought = async (req, res) => {
    try {
        const thoughtData = await Thought.create(req.body)
        const userData = await User.findOneAndUpdate(
            { username: req.body.username },
            { $addToSet: { thoughts: thoughtData._id } },
            { new: true }
        )
            .populate('thoughts')
        res.status(200).json(thoughtData)
    } catch (err) {
        res.status(500).json(err)
    }
}

const updateThought = async (req, res) => {
    try {
        const thoughtData = await Thought.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        )
        !thoughtData ? res.status(404).json('Thought does not exist') : res.status(200).json(thoughtData)
    } catch (err) {
        res.status(500).json(err)
    }
}

const deleteThought = async (req, res) => {
    try {
        const thoughtData = await Thought.deleteOne(
            { _id: req.params.id }
        )
        const UserThoughtData = await User.findOneAndUpdate(
            { thoughts: req.params.id },
            { $pull: { thoughts: req.params.id } },
            { new: true }
        )

        !thoughtData ? res.status(404).json('Thought does not exist') : res.status(200).json(thoughtData)
    } catch (err) {
        res.status(500).json(err)
    }
}

const addReaction = async (req, res) => {
    try {
        const thoughtData = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { new: true }
        )
        console.log(thoughtData)

        !thoughtData ? res.status(404).json('Thought does not exist') : res.status(200).json(thoughtData)
    } catch (err) {
        res.status(500).json(err)
    }
}

const deleteReaction = async (req, res) => {
    try {
        console.log('testing')
        const thoughtData = await Thought.findOneAndUpdate(
            { id: req.params.thoughtId },
            { $pull: { reactions: { _id: req.body } } },
            { new: true }
        )
        !thoughtData ? res.status(404).json('Thought does not exist') : res.status(200).json(thoughtData)
    } catch (err) {
        res.status(500).json(err)
    }
}
module.exports = { getThoughts, getSingleThought, createThought, updateThought, deleteThought, addReaction, deleteReaction }