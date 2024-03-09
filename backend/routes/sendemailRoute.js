const express = require("express");
const send = require('../controller/sendemailController');
const router = express.Router();

// Author = Wichai Kommongkhun

router.post("/", send.sendMail);

exports.router = router;