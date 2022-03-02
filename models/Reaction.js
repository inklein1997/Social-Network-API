const { ObjectId } = require('bson');
const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type:ObjectId,
            default: new ObjectId,
        },
        reactionBody: {
            type:String,
            required:true,
            maxlength:280,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: timeStamp => moment(timeStamp).format('MMM d, YYYY')
        },
        username: {
            type: String,
            required: true,
        },
    },
    {
        toJSON: {
            getters: true
        },
        id: false,
    }
)

module.exports = reactionSchema;