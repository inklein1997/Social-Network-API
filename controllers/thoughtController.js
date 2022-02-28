const { Thought } = require('../models');

const getThoughts = (req, res) => {
    Thought.find()
        .then(thoughtData => res.status(200).json(thoughtData))
        .catch(err => res.status(500).json(err))
}

const getSingleThought = (req, res) => {
    Thought.findOne({ _id: req.params.id })
        .select('-__v')
        .populate(reactions)
        .then(thoughtData => {
            !thoughtData ? res.status(404).json('Thought does not exist') : res.status(200).json(thoughtData)
        })
        .catch(err => res.status(500).json(err))
}

const createThought = (req, res) => {
    Thought.create(req.body)
        .then(thoughtData => res.status(200).json(thoughtData))
        .catch(err => res.status(500).json(err))
}

const updateThought = (req, res) => {
    Thought.findOneAndUpdate(
        { _id: req.params.id },
        req.body
    )
        .then(thoughtData => !thoughtData ? res.status(404).json('Thought does not exist') : res.status(200).json(thoughtData))
        .catch(err => res.status(500).json(err))
}

const deleteThought = (req, res) => {
    Thought.deleteOne(
        { _id: req.params.id }
    )
        .then(thoughtData => !thoughtData ? res.status(404).json('Thought does not exist') : res.status(200).json(thoughtData))
        .catch(err => res.status(500).json(err))
}

module.exports = { getThoughts, getSingleThought, createThought, updateThought, deleteThought }