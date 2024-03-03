const User = require("../models/userModel");
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require("dotenv").config();

// Author = Wichai Kommongkhun

// Login function
const authentication = async (req, res) =>{
    try{
        const {username, password} = req.body;
        const user = await User.findOne({username: username});

        if (!user){
            return res.json({message: "User not Found."}).status(400);
        }

        // verify password, compare password between hashcode
        // return boolean
        const password_Match = await bcrypt.compare(password, user.password);

        if (!password_Match){
            return res.json({message: "User not Found."}).status(401);
        }

        // jwt encode for session to client
        const token = jwt.sign({
            user_id: user._id,
            fullname: user.fullname
        }, process.env.SECRETKEY, {expiresIn: "2h",  algorithm: "HS256"});

        res.json({token: token}).status(200);

    }catch(error){
        console.log(error);
        res.status(500).json({error : "Internal Server Error. "});
    }
};

module.exports.authentication = authentication;