const mongoose = require('mongoose');
//const { title } = require('process');

const Productschema = new mongoose.Schema({
    title: {
        type: String,
        requiered: true
    },
    review: {
        type: String,
        requiered: true
    },
    img: {
        type: String,
        requiered: true
    },
    categories: { 
        type: Array
    },
    object: {
        type: String
    },
  },
    {timestamps: true}
);

module.exports = mongoose.model("product", Productschema);