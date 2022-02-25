require('dotenv').config({ path: require('find-config')('.env') });
const { connect, connection } = require('mongoose');

const connectionString =
    process.env.MONGODB_URL || process.env.local_connection;

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;