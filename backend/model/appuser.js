const mongoose=require("mongoose");

const AppuserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,        
    },
    country:{
        type:Number
    },
    premiumuser:{
        type:Boolean
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    }
});

//step 3
const Appuser = mongoose.model('Appuser',AppuserSchema);

module.exports=Appuser;