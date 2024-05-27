const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        requiered: true
    },
    email: {
        type: String,
        requiered: true
    }
});

module.exports = mongoose.model("User", userSchema);