const mongoose = require("mongoose");
const jwt=require("jsonwebtoken");
const Productdetails=require("../model/product");

const addProduct= async(req,res)=>{
    try{
        const data=req.body; // from Ui
        console.log(data);

        const Product = await Productdetails.create({
            productname: data.name,
            productprice: data.price,
            productmanufacturer: data.name,
            stockavailable: data.stocksin
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

module.exports={
    addProduct
}