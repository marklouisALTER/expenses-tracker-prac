const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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


//Hash password
userSchema.pre('save', async function(next){
   if(!this.isModified("password")){
    next();
   }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

//compile schema into model
const User = mongoose.model('User', userSchema);

module.exports = User;

