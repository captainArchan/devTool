const express = require("express");
const dust = require('../controller/requestDustController');
const router = express.Router();

// Author = Wichai Kommongkhun

router.get("/", dust.fetch_dust);
router.get("/filter",dust.filter_dust);
router.get("/graph", dust.fetch_graph);
router.get("/page", dust.fetch_page)

exports.router = router;