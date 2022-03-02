const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { users } = require('./data')

connection.on('error', err => err)

connection.once('open', async () => {
    console.log('created Social Network API database');

    await User.deleteMany({});
    await Thought.deleteMany({});

    await connection.close()


})