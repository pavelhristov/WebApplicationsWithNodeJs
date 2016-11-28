/* globals require */

const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const validators = require('mongoose-validators');


let schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        validate: [validators.isLength(2, 30)]
    },
    countries: [{}]
});

schema.plugin(uniqueValidator);
mongoose.model("Planet", schema);

module.exports = mongoose.model("Planet");