const users = [
    {
        username: 'inklein1997',
        email: 'inklein1997@gmail.com',
        friends: [
            {
                name: 'deklein1997',
                email: 'deklein1997@gmail.com'
            },
            {
                name: 'rangerbat96',
                email: 'rangerbat96@gmail.com'
            },
        ],
        thoughts: [],
    },
    {
        username: 'deklein1997',
        email: 'deklein1997@gmail.com',
        friends: [
            {
                name: 'inklein1997',
                email: 'inklein1997@gmail.com'
            },
            {
                name: 'rangerbat96',
                email: 'rangerbat96@gmail.com'
            },
        ],
        thoughts: []
    },
    {
        username: 'rangerbat96',
        email: 'rangerbat96@gmail.com',
        friends: [
            {
                name: 'inklein1997',
                email: 'inklein1997@gmail.com'
            },
            {
                name: 'deklein1997',
                email: 'deklein1997@gmail.com'
            },
        ],
        thoughts: []
    },
]

const reactions = [
    {
        reactionBody: 'test1',
        username: 'inklein1997'
    },
    {
        reactionBody: 'test2',
        username: 'deklein1997'
    },
    {
        reactionBody: 'test3',
        username: 'rangerbat96'
    },
    {
        reactionBody: 'test4',
        username: 'marlen684'
    },
]

module.exports = { users, reactions }