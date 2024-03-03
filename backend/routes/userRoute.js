const express = require("express");
const userController = require("../controller/userController");
const Authen = require("../middleware/authenticationMiddleware");
const router = express.Router();

// Author = Wichai Kommongkhun

router.get("/", userController.fetch_User_All);
router.get("/:id", userController.fetch_one_by_id);
router.post("/", userController.createUser);

// They are Need authentication
router.put("/:id", Authen.varifyToken, userController.update_user);
router.delete("/:id", Authen.varifyToken, userController.deleteUser);

exports.router = router;