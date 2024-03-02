const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxLength: 255
    },
    phone: {
        type: String,
        required: true,
        minLength: 10, 
        maxLength: 10
    },
    email: {
        type: String,
        required: true,
        maxLength: 255
    },
    fullname:{
        type: String,
        required: true,
        maxLength: 255
    },
    password: {
        type: String,
        required: true,
    },
    amphur:{
        type: String,
        required: true,
        maxLength: 255
    },
    tumbon:{
        type: String,
        required: true,
        maxLength: 255
    },
    province:{
        type: String,
        required: true,
        maxLength: 255
    },
    address:{
        type: String,
        required: true,
    },
    zipcode:{
        type: Number,
        maxLength: 5
    }
});

const User = mongoose.model("users", userSchema);
module.exports = User;