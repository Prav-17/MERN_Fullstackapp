const mongoose=require("mongoose");

const ProductSchema = new mongoose.Schema({
        productname:{
            type:String,
            required:true
        },
        productprice:{
            type:String,
            required:true
        },
        productmanufacturer:{
            type:String,
            required:true
        },
        stockavailable:{
            type:Number,
        },
        image:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true
        }

});

const Product = mongoose.model('Product',ProductSchema);

module.exports=Product;
