const express= require("express");
const router=express.Router();
const userController = require("../controllers/userController");

router.post("/userregister", userController.createAppuser);
router.post("/userlogin", userController.userLogin);

module.exports=router;