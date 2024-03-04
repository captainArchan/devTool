const express = require("express");
const authenticationController = require("../controller/authenticationController");
const router = express.Router();

// Author = Wichai Kommongkhun

// difine router for authentication
router.post("/login", authenticationController.authentication);

exports.router = router;
