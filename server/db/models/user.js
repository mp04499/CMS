const mongoose = require('mongoose');
const { Schema } = mongoose;
const validator = require('validator');
const argon2 = require('argon2');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: "Username already exist",
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: "Email already exist",
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value))
                throw new Error('Email is not valid');
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (value.length < 6)
                throw new Error('Password but have at least 6 characters');
            else if (value.toLowerCase().includes('password'))
                throw new Error('Passwoard can not contan the substring password');
        }
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
});

userSchema.methods.confirmPassword = async password => {
    console.log(this)
}

module.exports = mongoose.model('User', userSchema);

