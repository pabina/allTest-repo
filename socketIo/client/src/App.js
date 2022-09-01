import React from 'react';
import io from "socket.io-client"

const socket=io.connect("http://localhost:8006");
 
const App = () => {
  const sendMessage=()=>{
    socket.emit("send_message",{message:"hello"});

    //for only ourself
    // socket.broadcast
  }
  return (
  <>
 <div className="App">
  <input type="text" placeholder='message' />
  <button onClick={sendMessage}> send message</button>
 </div>
  </>
  )
}

export default App