import express from "express";
import dotenv from "dotenv";
import Connection from "./db/DBConnection.js";
import userRoute from "./routes/user_route.js";
import authRoute from "./routes/auth.js";

const app=express();
dotenv.config()

//connected to database
Connection();

//adding middleware
app.use(express.json());

//calling differents routes
app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);


app.get("/api/test",()=>{
    console.log("test is successfull");
})







//listening to server
app.listen(process.env.PORT,()=>{
    console.log("server is running");
})
