const express = require("express");
const dust = require('../controller/requestDustController');
const router = express.Router();

// Author = Wichai Kommongkhun

router.get("/", dust.fetch_dust);

exports.router = router;