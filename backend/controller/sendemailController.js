const User = require("../models/userModel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
require('dotenv').config();

const sendMail = async (req, res) => {
    try{

        console.log("sendmail");
        const email = req.body.email;

        const transporter = nodemailer.createTransport({
             service: 'Gmail', 
             auth: {
                 user: 'anapat852@gmail.com',
                 pass: 'iixa zryh eqsg oshg'
             }
         });

         const mailOptions = {
             from: 'anapat852@gmail.com', 
             to: email, //mail ที่เราจะส่งไปให้อะ
             subject: 'แจ้งเตือนสภาพอากาศ', 
             text: "อากาศร้อนมาก" 
         };

         transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                 console.error('Error sending email:', error);
                 res.status(500).send('Error sending email');
             } else {
                 console.log('Email sent:', info.response);
                 res.status(200).send('Email sent successfully');
             }
         });

        // res.status(200).json(users);

    }catch(error){
        console.log(error);
    }
}; 

module.exports.sendMail = sendMail;