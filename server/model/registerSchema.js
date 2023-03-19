const mongoose=require("mongoose");



const registerschema= new mongoose.Schema({
    firstname:{
        type: String,
        required:true
    },
  lastname:{
    type:String,
    required: true
  },
  email:{
    type:String,
    required: true,
    unique:true
  },
  password:{
    type:String, 
    required: true

  }
});
const Registeration =new mongoose.model("Registeration",registerschema);


module.exports=Registeration;