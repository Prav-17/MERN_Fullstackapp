//step 1
const mongoose = require("mongoose");
const Appuser = require("../model/appuser");
const bcrypt=require("bcrypt");
const saltRounds = 10;


//step 2
const createAppuser = async(req,res)=>{
    try{
        const data = req.body;
        console.log(data);

        //hashing password
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(data.password, salt);   
        // validation 
        
        //step 4
        // const st = await Student.create(data)
        const st = await Appuser.create({
            name:data.name,
            password:hash,
            pincode:data.pincode,
            country:data.country,
            email:data.email,
            premiumuser:data.premiumuser,
            contact:data.contact,

        }).then((result)=>{
            console.log(result);
            res.send({status:"Success",data:result});
        })
        .catch((err)=>{
            console.error(err);
            res.send({status:"Fail",data:err});
        })
    }catch(err){
        console.err(err);
    }
}

const userLogin= async(req,res)=>{
      try{
        const data= req.body;
        const user = await Appuser.findOne({email:data.email});
        let isAuth = bcrypt.compareSync(data.password,user.password);
        console.log(isAuth);
        if(isAuth){
            user.password="";
            res.send({status:"Valid user",data:user});
        }
        else{
            res.send({status:"Invalid user",data:{}});
        }

      }catch(error){
        console.log(error);
        res.send({Status:"Fail",data:error});
      }

}

module.exports={
    createAppuser,
    userLogin
}