const express = require("express");
const locationController = require("../controller/localationController");
const router = express.Router();

router.get("/", locationController.fetch_Location_All);
router.get("/:user_id", locationController.fetch_Location_byUserID);
router.post("/", locationController.create_location);
router.put("/:id", locationController.update_location);
router.delete("/:id", locationController.delete_location);

exports.router = router;