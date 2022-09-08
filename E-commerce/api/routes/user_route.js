import express from "express";
import { Router } from "express";
import { verifyToken, verifyTokenAndAuthentication } from "./verifytoken.js";
import User from "../models/User.js";
const userRoute=express.Router();


userRoute.put("/:id",verifyTokenAndAuthentication, async(req,res)=>{
   if(req.body.password){
   req.body.password=CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();
   }

   try {
    const updatedUser=await User.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true});
    res.status(200).json(updatedUser)
   } catch (error) {
    res.status(500).json(error)
   }
})

export default userRoute;