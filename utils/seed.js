const connection = require('../config/connection');
const { User, Thought } = require('../models');
const usernames = require('./data')

connection.on('error', err => err)

connection.once('open', async () => {
    console.log('connected to database');

    await User.deleteMany({});
    await Thought.deleteMany({});

    const reactions = [];
    const users = [...usernames];

    

})