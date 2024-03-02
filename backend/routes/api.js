const express = require("express");
const api = require('../models/getPM')
router = express.Router();

router.get("/", api.getPM)

exports.router = router;