const express = require("express");

const userController = require("../controller/userController");

const router = express.Router();

router.get("/", userController.fetch_User_All);
router.post("/", userController.createUser);
router.put("/:id", userController.update_user);
router.delete("/:id", userController.deleteUser);

exports.router = router;