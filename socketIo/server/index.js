import express from "express";
// import {Socket} from "socket.io";
import { Server } from "socket.io";
import {createServer} from "http";
import cors from "cors";

const app=express();
const httpServer=createServer();

app.use(cors());
const io= new Server(httpServer,{
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"]
    }
})

//listining to events
io.on("connection",(socket)=>{
console.log(`user connected:${socket.id}`)

socket.on("send_message",(data)=>{
console.log(data);
})
})

//listen to server
httpServer.listen("8006",()=>{
    console.log("server is working");
})