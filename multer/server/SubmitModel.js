import mongoose from "mongoose";

const  SubmitModel=mongoose.Schema({
    Image1:{
        type:String,
        require:true
    },
    // Image2:{
    //     type:String,
    //     require:true
    // },
    // Image3:{
    //     type:String,
    //     require:true
    // },
    // Image4:{
    //     type:String,
    //     require:true
    // }
    
});
const user=mongoose.model("user",SubmitModel);
export default user;