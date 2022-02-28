const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { users } = require('./data')

connection.on('error', err => err)

connection.once('open', async () => {
    console.log('connected to database');

    await User.deleteMany({});
    await Thought.deleteMany({});

    const reactions = [];

    User.insertMany(users, (err, userData) =>
        err ? console.error(err) : console.log(userData)
    )



})