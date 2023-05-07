const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstname: {
        require: [true, 'Firstname is required'],
        type: String,

    },
    lastname: {
        require: [true, 'Lastname is required'],
        type: String,

    },
    email: {
        require: [true, 'Email is required'],
        type: String,

    },
    password: {
        require: [true, 'Password is required'],
        type: String,

    },
    admin: {
        type: Boolean,
        default: false,

    },
},
{
    timestamp: true,
}
);


//compile schema into model
const User = mongoose.model('User', userSchema);

module.exports = User;

