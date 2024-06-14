//step 1
const mongoose = require("mongoose");
const Appuser = require("../model/appuser");
const bcrypt=require("bcrypt");
const saltRounds = 10;
const jwt=require("jsonwebtoken");
const SECRET_KEY = "9d1758659c3a6136814b4a78d9ee5eaedfa4308c507d9e3cb330be0331f1ec50";
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
        const user = await Appuser.create({
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
            const token = jwt.sign({userid:user._id,username:user.name,useremail:user.email},SECRET_KEY,{expiresIn:'1h'});
            user.password="";
            res.send({status:"Valid user",data:token});
        }
        else{
            res.send({status:"Invalid user",data:{}});
        }

      }catch(error){
        console.log(error);
        res.send({Status:"Fail",data:error});
      }
    }

const getUser = async(req,res)=>{
        try{
            console.log(req.query.email);
            const data = req.query.email;
            const user = await Appuser.findOne({email:data});
            user.password="";
            res.send({Status:"Success",data:user});
        }catch(error){
            console.log(error);
            res.send({Status:"Fail",data:error});
        }
    }

const updateUserPassword= async(req,res)=>{
    try{
        const data =  req.body;
        const user = await Appuser.findOne({email:data.email});
        let isAuth = bcrypt.compareSync(data.oldpass,user.password);
        if(isAuth){
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(data.newPassword, salt)
        const user = await Appuser.findOneAndReplace( {email:user.email},{password: hash},{new:true});
        user.password="";
        res.send({Status:"Success",data:user});
        console.log(user);
        }else{
            console.log("Incorrect Password")
        }
    }catch(err){
        res.send({Status:"Failed",data:err});
    }
}
const deleteUser = async(req,res)=>{
    try{
        const data =  req.body;
        const user = await Appuser.findOneAndDelete({email:req.body.email});
        res.send({Status:"Success",data:user});
    }catch(err){
        console.log(err);
        res.send({Status:"Fail",data:err});
    }
}

module.exports={
    createAppuser,
    userLogin,
    getUser,
    updateUserPassword,
    deleteUser
}