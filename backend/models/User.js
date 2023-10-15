const mongoose = require('mongoose');

const UserDetailSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
    },
},
{
    timestamps: true
});


const User = mongoose.model("User", UserDetailSchema);
module.exports = {User};