const mongoose = require("mongoose");
const jwt=require("jsonwebtoken");
const Productdetails=require("../model/product");

const addProduct= async(req,res)=>{
    try{
        const data=req.body; // from Ui
        console.log(data);

        const Product = await Productdetails.create({
            productname: data.productname,
            productprice: data.productprice,
            productmanufacturer: data.productmanufacturer,
            stockavailable: data.stockavailable,
            image: data.image,
            category: data.category
        }).then((result)=>{

            console.log(result);
            res.send({status:"Product added", data:result});
        })
        .catch((err)=>{
            console.log(err);
            res.send({Status:"Action Failed", data:err});
        })

    }catch(err){
        console.log(err);
    }
}
// body data == post method / params data == get method
const getProduct = async(req,res)=>{
    try{
        console.log(req.query.productname);
        const productname = req.query.productname;
        const product = await Productdetails.findOne({productname:productname});
        res.send({Status:"Success",data:product});
    }catch(error){
        console.log(error);
        res.send({Status:"Fail",data:error});
    }
}


module.exports={
    addProduct,
    getProduct
}