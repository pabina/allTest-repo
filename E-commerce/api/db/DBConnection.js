import mongoose from "mongoose";

//connection to database 

 
 
const Connection= ()=>{

 mongoose.connect(process.env.URL,{useunifiedTopology:true,useNewurlparser:true})
 console.log("database connected");
}

export default Connection;