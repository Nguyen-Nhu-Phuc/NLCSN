import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    role: {
        type: String,
        default: 'student'
    },

    fullName: {
        type: String,
    },

    userName: {
        type: String
    },

    email: {
        type: String,
        unique: true
    },

    passWord: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    },
    refreshToken: {
        type:String
    },
}, 

    {timestamps:true},

    { collection: 'user' });

const User = mongoose.model('User', userSchema);

export default User;