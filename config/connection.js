const { connect, connection } = require('mongoose');

const connectionString =
    process.env.MONGODB_URI || process.env.local_connection;

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;