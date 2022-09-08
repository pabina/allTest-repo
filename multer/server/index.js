import  express  from "express";
import mongoose from "mongoose";
import user from "./SubmitModel.js";
import multer from "multer";
const app=express();


// const upload = multer({ dest: 'uploads/' });
// const upload = multer({ dest: './public/data/uploads/' })

//middleware
app.use(express.json());
// app.use(cors());
const url="mongodb://localhost:27017/mymulter"




//connection to database
  mongoose.connect(url,{useunifiedTopology:true,useNewurlparser:true})
     console.log("database connected successfully");


     //multer practice
    //  const storage = multer.diskStorage({
    //     destination: function (req, file, cb) {
    //       cb(null, "/uploads")
    //     },
    //     filename: function (req, file, cb) {
    //       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    //       cb(null, file.fieldname + '-' + uniqueSuffix)
    //     }
    //   })
      
    //   const upload = multer({ storage: storage })
      

    // const upload = multer({ dest: './uploads' })

    //  app.post('/upload', upload.single('myimage'), function (req, res, next) {
        // req.file is the `avatar` file
        // req.body will hold the text fields, if there were any

        // var fileInfo=req.file;
        // var title=req.body.title;
        // console.log(title);
        // res.send(fileInfo);
        // const mydata=req.body;
        // const newdata=user(mydata);
        //  newdata.save();
        //  res.status(200).json(newdata);
    //   })

// app.post("/create",(req,res,next)=>{
//     const mydata=req.body;
//     const newdata=user(mydata);
//     newdata.save();
//     res.status(200).json(newdata);



// })




let imageName;
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    imageName =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      "-" +
      file.originalname.trim();
    cb(null, imageName);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("myimage"), (req, res) => {
    // Controller.bookAdd(req, res, imageName);
    res.status(200).json(imageName)
  }),


app.listen("8004",()=>{
   console.log("server is working"); 
})