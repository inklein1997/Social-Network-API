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
        },
        username: {
            type: String,
            required: true,
        },
    }
)

module.exports = reactionSchema;