const express=require("express");
const router=express.Router();
const productController=require("../controllers/productController");
//auth to be added from admin
router.post("/addproduct",productController.addProduct);

module.exports = router;