import React,{useState} from "react";
import { NavLink,useNavigate } from "react-router-dom";


const Registeration = () => {

 
  const navigate=useNavigate("");


const[inp,setinp]=useState({
  firstname:"",
  lastname:"",
  email:"",
  password:""
})



  const setdata=(e)=>{
            console.log(e.target.value);
            const{name,value}=e.target;
            setinp((preval)=>{
              return{
                ...preval,
                [name]:value
              }
            })
  }

  const addingdata = async(e)=>{
    e.preventDefault();
    const {firstname,lastname,email,password}=inp;
    const res=await fetch('/registeration',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        firstname,lastname,email,password

      })
    });
   
    if(res.status===203){
      alert("Please fill out the enteries");
      console.log("error");
      navigate("/registeration")
    }
    else if(res.status===422){
      alert("Error reported");
    }
    else if (res.status===204)
    {
      alert("User already registered");
    }
    else{
      const data=await res.json();
      console.log(data);
      alert("data added");
    console.log("data registered" );
    navigate("/");

    }


  }

  return (
    <div className="container">
      <h1>Registeration of user</h1>
      <NavLink to='/'>Home</NavLink>
      <form className="mt-4">
        <div className="row">
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label  className="form-label">First Name</label>
          <input type="text" value={inp.firstname} onChange={setdata} className="form-control"  name="firstname"    required  />
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label  className="form-label">Last Name</label>
          <input type="text"value={inp.lastname} onChange={setdata}  className="form-control"  name="lastname"  required  />
        </div>




        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label className="form-label">Email</label>
          <input type="email" value={inp.email} onChange={setdata} name="email" className="form-control"   required />
        </div>

        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label className="form-label">Password</label>
          <input type="password" value={inp.password} onChange={setdata} name="password" className="form-control"    required  />
        </div>
        <button type="submit" onClick={addingdata} className="btn btn-primary">Submit</button>
        </div>
      </form>
    
    </div>


  )
}

export default Registeration;