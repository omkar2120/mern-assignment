const express = require("express");
const UserController = require("../controller/UserController.js");

const router = express.Router();


router.get("/getAllUserData", UserController.getAllUserData);
router.post("/createnew", UserController.createNew);
router.post("/deleteData", UserController.deleteData);



module.exports = router;
