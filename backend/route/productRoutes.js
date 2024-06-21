const express=require("express");
const router=express.Router();
const productController=require("../controllers/productController");
//auth to be added from admin
router.post("/addproduct",productController.addProduct);
router.get("/getproduct",productController.getProduct);
router.post("/deleteproduct",productController.deleteProduct);
router.post("/updatestocks",productController.updateProduct);
router.post("/products",productController.getAllProduct);

module.exports = router;