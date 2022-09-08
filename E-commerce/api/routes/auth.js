import express from "express";
import { Router } from "express";
import User from "../models/User.js";
import CryptoJS from "crypto-js";
import  Jwt  from "jsonwebtoken";

const authRoute=express.Router();
 

//REGISTER
authRoute.post("/register",async(req,res)=>{
    const newUser=new User({
        username:req.body.username,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
        
    });
    try {
        const savedUser= await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) { 
    res.status(500).json(error); 
    }
})




//LOGIN
authRoute.post("/login",async(req,res)=>{
   try {
       
    const user=await User.findOne({username:req.body.username});
    !user && res.status(401).json("wrong crendentials");
    
    const hashedPassword=CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
    
    const Originalpassword=hashedPassword.toString(CryptoJS.enc.Utf8);
   
    Originalpassword!==req.body.password &&
     res.status(401).json("wrong credentials!");

     //creating access token
     const accessToken=Jwt.sign({
        id:user._id,
        isAdmin:user.isAdmin,
     }, process.env.Jwt_SEC,
     {expiresIn:"3d"}
     
     )
   

      const {password,...others}=user._doc;
    res.status(200).json({...others,accessToken});
   } catch (error) {
    res.status(500).json(others);
   }
})



export default authRoute;