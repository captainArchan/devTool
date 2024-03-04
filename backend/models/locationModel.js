const mongoose = require("mongoose");

// Author = Wichai Kommongkhun

const locationSchema = new mongoose.Schema({
    user_id:{
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    }
});

const Location = mongoose.model("location", locationSchema);
module.exports = Location;