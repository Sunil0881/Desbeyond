const mongoose = require('mongoose');

const BlogDetailSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
},
{
    timestamps: true
});


const Blog = mongoose.model("Blog", BlogDetailSchema);
module.exports = {Blog};