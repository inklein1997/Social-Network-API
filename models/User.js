const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // validate: {
            //     validator: () => Promise.resolve(false),
            //     message:'Not a valid email'
            // }
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type:Schema.Types.ObjectId,
                ref: this,
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
)

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

const User = model('User', userSchema, 'User');

// const user = new Reaction();

// user.email = 'test@gmail.com';
// user.username = 'test';
// user.validate().catch(error => {
//     assert.ok(error);
//     assert.equal(error.errors['name'].message, 'Oops!');
//     assert.equal(error.errors['email'].message, 'Email validation failed');
// })

module.exports = User