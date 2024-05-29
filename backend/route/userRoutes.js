const express= require("express");
const router=express.Router();
const userController = require("../controllers/userController");
const AuthGuard=require("../middleware/authGuard");

router.post("/userregister", userController.createAppuser);
router.post("/userlogin", userController.userLogin);
router.get("/userdetails", AuthGuard,userController.getUser);
router.post("/changepassword", AuthGuard,userController.updateUserPassword);
router.post("/deleteuser", AuthGuard,userController.deleteUser);
module.exports=router;