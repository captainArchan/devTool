const Joi = require("joi")

module.exports.userSchema = Joi.object({
    username: Joi.string().required().min(6).max(255).pattern(/^[A-Za-z0-9]+$/),
    password: Joi.string().required().min(8).pattern(/^[A-Za-z0-9]+$/),
    fname: Joi.string().required().min(2).max(20),
    lname: Joi.string().required().min(2).max(20),
    email: Joi.email().required(),
    tel: Joi.number().integer().positive(),
    address: Joi.string().allow("").required(),
});

module.exports.locationSchema = Joi.object({
    latitude: Joi.number().required(),
    longitude: Joi.number().required()
});