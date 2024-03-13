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
             text: "สภาพอากาศปกติ แต่ควรป้องกันด้วยการ\nสารสกัด: ใช้เครื่องใช้ไฟฟ้าที่มีสารสกัดเพื่อกำจัดฝุ่น PM2.5 ได้ เช่น อุปกรณ์ทำให้มีอากาศเย็น หรือเครื่องฟอกอากาศที่มี HEPA filter ซึ่งสามารถดักจับฝุ่น PM2.5 ได้มากขึ้น\nการรักษาความสะอาด: รักษาความสะอาดในบ้านอย่างสม่ำเสมอ เช่น ทำความสะอาดบ้าน เช็ดพื้น สะอาดเฟอร์นิเจอร์ ล้างผ้าปูที่นอน เป็นต้น เพื่อลดฝุ่น PM2.5 ที่สามารถสะสมอยู่ในบ้าน\nการป้องกันภายนอก: สามารถป้องกันการเข้าสู่ภายนอกของฝุ่น PM2.5 โดยการใส่หน้ากากป้องกันฝุ่นที่มีมาตรฐาน และหลีกเลี่ยงการอยู่ภายนอกในช่วงเวลาที่มีมลพิษอากาศสูง"
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