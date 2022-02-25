const router = require('express').Router();
const thoughtsRoute = require('./thoughts');
const usersRoutes = require('./users')

router.use('/users', usersRoutes);
router.use('/thoughts', thoughtsRoute);

module.exports = router