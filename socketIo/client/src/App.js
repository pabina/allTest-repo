import React from 'react';
import io from "socket.io-client";
import { useEffect,useState } from 'react';

const socket=io.connect("http://localhost:8006");
 
const App = () => {
  const [room,setRoom]=useState("");
  const [message,setMessage]=useState("");
  const [messageReceived,setMessageReceive]=useState("")
  
  
  const joinRoom=()=>{
    if(room !== ""){
      socket.emit("join_room",room);
    }
  }
  
  const sendMessage=()=>{
    socket.emit("send_message",{message,room});
  };  



  
  useEffect(()=>{
    //listen to the event
  socket.on("receive_message",(data)=>{
  // alert(data.message);
  setMessageReceive(data.message);
  })
  },[socket])

  return (
  <>
 <div className="App">
    <input placeholder='Room number' onChange={(event)=>{setRoom(event.target.value)}}/>
    <button onClick={joinRoom}>joinRoom</button>

   <br></br>

  <input type="text" placeholder='message' onChange={(event)=>{
    setMessage(event.target.value)
  } }/>


  <button onClick={sendMessage}> send message</button>
 <h1>message:</h1>
 {messageReceived}
 </div>
  </>
  )
}

export default App