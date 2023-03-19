const express=require("express");
const router=express.Router();
const ComplaintSchema=require("../model/usermodel");
const Register=require("../model/registerSchema");





router.get("/",(req,res)=>{
    console.log("connect");
});


//router.post("/register",function(req,res,next){
    //const{firstname,location,email,subject,details}=req.body;
    //ComplaintSchema.find(req.params.email).create(req.body).then((complaint)=>{
        //res.status(200).send("Complaint registered successfully");
        //console.log(complaint);
        
    //},(err)=>next(err))
    //.catch((err)=>next(err));
//});

//router.post("/register",async(req,res)=>{
    //console.log(req.body)
    
   // console.log("printing request body");
    //console.log(req.body);
    //try{
        //const preuser= await ComplaintSchema.findOne({email:email});
        //console.log("printing pre user");
        //console.log(preuser);
        //console.log("printing request email")
        //console.log(email);
        //if (preuser)
        //{
            //console.log("successful");
            //const registercomplaint= new ComplaintSchema({
                //firstname,location,email,subject,details
            //})
            //console.log("awaiting to store");
            //await registercomplaint.save();
            //console.log("successful await");
            //res.status(201).json(registercomplaint);
            //console.log("--------data saved successful--------");
            //console.log("printing the data sent by registercomplaint");
            //console.log(registercomplaint);
           
        //}
        //else
        //{
            //res.status(403).send("This email is not registered");
          
        //}
    //}
    //catch(error){
        //res.status(404).send(error)
    //}
//})

//registeration of the user
router.post('/registeration',async(req,res)=>{
    //console.log("registeration successful");
    //console.log(req.body);
    const{firstname,lastname,email,password}=req.body;
    try{
       const preuser=await Register.findOne({email:email});
      // console.log(preuser);


      if(!firstname || !lastname || !email  ||!password){
        res.status(203).json("Please fill out the enteries");
      }

       if(preuser)
       {
        res.status(204).json("Already registered");
       }
       else
       {
        const adduser=new Register({
            firstname,lastname,email,password
        });
        await adduser.save();
        res.status(201).json(adduser);
        console.log(adduser);
        console.log ("data stored of new user");
       }
    }
    catch(error){
        res.status(422).json(error);
    }


})


//registeration of the complaint
router.post('/register',async(req,res)=>{
    const {name,location,email,subject,details}=req.body;
    try{

        if(!name || !location || !email  ||!subject ||!details){
            res.status(203).json("Please fill out the enteries");
          }
    
        const preuser=await Register.findOne({email:email});
        if(preuser){
            
            const register=new ComplaintSchema({
                name,location,email,subject,details
            });
            console.log(register);
            await register.save();
            res.status(201).json("User found");
            console.log("Complaint registered");
            //res.status(200).json("Complaint successfully registered");
        }
        else if (!preuser){
          
            console.log("User not found ");
            res.status(404).json("User not found");
        }
    }
    catch(error){
        res.status(422).json(error);
        console.log(error);
    }
  
})


//Viewing the user data 
router.get("/viewdata",async(req,res)=>{
    try{
      const complaintdata=await ComplaintSchema.find();
      res.status(201).json(complaintdata);
       console.log(complaintdata);
    }
    catch(error)
    {
        res.status(422).json(error);
        console.log("error");
    }
})

 


//viewing the data by individual user id 
router.get("/viewdata/:id",async(req,res)=>{
    try{
        console.log(req.params);
        const {id}=req.params;

        const complaint_id=await ComplaintSchema.findById({_id:id});
        console.log(complaint_id);
        res.status(201).json(complaint_id);
    }catch(error){
        console.log(error);
        res.status(422).json(error);
    }
})



//updating a record 
router.patch("/updateuser/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const updateuser=await ComplaintSchema.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updateuser);
        res.status(201).json(updateuser);

    }
    catch(error)
    {
        console.log("Error detected");
        res.status(422).json("Error");
    }
});


//Deleting a complaint

router.delete("/deleterecord/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const deleteuser=await ComplaintSchema.findByIdAndDelete({_id:id});
        console.log("Data deleted");
        res.status(201).json(deleteuser);
    }
    catch(error){
        console.log("error");
        res.status(422).json("Error reported");
    }
})


module.exports= router;
