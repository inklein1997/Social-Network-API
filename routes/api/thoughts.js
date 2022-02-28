const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought)

router.route('/:id').get(getSingleThought).put(updateThought).delete(deleteThought)

router.route('thoughts/:thoughtId/reactions')

module.exports = router;