import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import apiFunctinality from "./Api.js";

const apicall=new apiFunctinality;

const defaultValue={
  myimage:""
}



function App() {
  const[data,setdata]=useState(defaultValue);

  const valueChange=function(e){
    console.log({ ...data, [e.target.name]: e.target.value });
    setdata({ ...data, [e.target.name]: e.target.value });
    }

    const clickFun=()=>{
      // const {myimage}=data;
      apicall.adduser(data);
      
    }

  return (
   <>
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">image1</label>
    <input type="file" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="myimage"  onChange={(e)=>{valueChange(e)}} />
    
  </div>
  {/* <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">image2</label>
    <input type="file" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">image3</label>
    <input type="file" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">image4</label>
    <input type="file" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div> */}
  
  <button type="submit" class="btn btn-primary"  onClick={()=>{clickFun()}}>Submit</button>
</form>


   </>
  );
}

export default App;
