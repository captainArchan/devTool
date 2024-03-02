const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
    user_id:{
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    Latitude: {
        type: Number,
        required: true
    },
    Longitude: {
        type: Number,
        required: true
    }
});

const Location = mongoose.model("location", locationSchema);
module.exports = Location;