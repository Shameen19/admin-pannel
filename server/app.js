require("dotenv").config();
const express=require("express");
const app=express();
const mongoose =require("mongoose");
const ComplaintSchema=require("./model/usermodel");
const Registeration=require("./model/registerSchema");
const cors =require("cors");
const router=require("./routes/router");


mongoose.connect("mongodb://localhost:27017/registercheck",function(err,db){
    if(err) throw err;
    console.log("Db connected");
})




const port= 8003;
app.use(cors());
app.use(express.json());


app.use(router);




app.listen(port,()=>{
    console.log(`server is starting at port ${port}`);
});