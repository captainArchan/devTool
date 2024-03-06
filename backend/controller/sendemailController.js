const User = require("../models/userModel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
require('dotenv').config();

const sendMail = async (req, res) => {
    try{
        //console.log("CheckBODY: ",req.body);
        // const idd  = req.body.id;
        // const users = await User.findBy({_id: idd});
        // const pm = req.body.pm;
        // fin
        console.log("sendmail");
        // if(users.length === 0 ){
        //     return res.status(400).json({message : "User not Found."})
        // }
        // const password_Match = await bcrypt.compare(password, users.password);


        const transporter = nodemailer.createTransport({
             service: 'Gmail', 
             auth: {
                 user: 'anapat852@gmail.com',
                 pass: 'iixa zryh eqsg oshg'
             }
         });

         const mailOptions = {
             from: 'anapat852@gmail.com', 
             to: '64070053@kmitl.ac.th', //mail ที่เราจะส่งไปให้อะ
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