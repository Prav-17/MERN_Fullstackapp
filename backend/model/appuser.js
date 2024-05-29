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
        type:String,
    },
    premiumuser:{
        type:Boolean
    },
    role:{
        type:String,
        enum:['admin','seller','buyer'],
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    contact:{
        type:String,
        required:true
    }
});

//step 3
const Appuser = mongoose.model('Appuser',AppuserSchema);

module.exports=Appuser;