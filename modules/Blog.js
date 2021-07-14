const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },

    // slug: {
    //     type: String,
    //     required: true,
    // },
    // content: {
    //     type: String,
    //     required: true,
    // },
    // image: { 
    //     type: String, 
    //     alt: String 
    // },
    // published: {
    //     type: Boolean,
    //     default: true
    // },
    // category: String,

});

module.exports = mongoose.model('Blog', BlogSchema);