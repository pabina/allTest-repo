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

socket.on("join_room",(data)=>{
    socket.join(data);
})

socket.on("send_message",(data)=>{
// console.log(data);
//send event

socket.to(data.room).emit("receive_message",data);
// socket.broadcast.emit("receive_message",data);
});
});

//listen to server
httpServer.listen("8006",()=>{
    console.log("server is working");
})