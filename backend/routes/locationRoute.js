const express = require("express");
const locationController = require("../controller/localationController");
const Authen = require("../middleware/authenticationMiddleware");
const router = express.Router();

// Author = Wichai Kommongkhun

router.get("/", locationController.fetch_Location_All);
router.get("/:user_id", locationController.fetch_Location_byUserID);


// They are Need authentication
router.post("/", Authen.varifyToken,locationController.create_location);
router.put("/:id", Authen.varifyToken ,locationController.update_location);
router.delete("/:id", Authen.varifyToken,locationController.delete_location);

exports.router = router;