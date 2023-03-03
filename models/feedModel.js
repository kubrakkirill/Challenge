const mongoose = require('mongoose');
const moment = require('moment');

const schema = mongoose.Schema;

const feed = new schema({
    name: {
        type: String,
        required: true,
        maxLength: 15,
    },
    message: {
        type: String,
        required: true,
        maxLength: 40,
    },
    created_at: {
        type: Date,
        default: Date.now,
        get: function (createdAt) {
            return moment(createdAt).format('MMMM Do YYYY, h:mm:ss a');
        }
    }
}, {timestamps: true});

module.exports = mongoose.model('Feed', feed);