const User = require("../models/userModel");
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require("dotenv").config();

// Author = Wichai Kommongkhun

// Login function
const authentication = async (req, res) =>{
    try{
        console.log(req.body)
        const {username, password} = req.body;
        // const username = req.body.username;
        // const password = req.body.password;
        console.log(username);
        const user = await User.findOne({username: username});

        // if have no username in collection return Badrequest
        if (user != null){
            return res.json({message: "User not Found."}).status(400);
        }

        // verify password, compare password between hashcode
        // return boolean
        const password_Match = await bcrypt.compare(password, user.password);

        if (password_Match == false){
            return res.json({message: "User not Found."}).status(401);
        }

        // jwt encode for session to client
        // exp : 2 hour
        const token = jwt.sign({
            user_id: user._id,
            fullname: user.fullname
        }, '9jn3ooAdnmg33f00apijns12', {expiresIn: "2h",  algorithm: "HS256"});

        console.log(token)
        console.log(user.email)
        res.json({token: token, email: user.email}).status(200);

    }catch(error){
        console.log(error);
        res.status(500).json({error : "Internal Server Error. "});
    }
};

module.exports.authentication = authentication;