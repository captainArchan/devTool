const express = require("express");
const dust = require('../models/getPM')
router = express.Router();

router.get("/", dust.fetch_dust);

exports.router = router;