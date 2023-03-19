
import React,{useState,useEffect} from 'react';
import { NavLink ,useParams,useNavigate} from 'react-router-dom';


const Edit=()=>{

  //const [getuserdata,setuserdata]=useState([]);
  //console.log(getuserdata);


  const History=useNavigate("");
   
const[inp,setinp]=useState({
    name:"",
    location:"",
    email:"",
    subject:"",
    details:"",
    status:""
  });
  
  
  
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


    const {id}=useParams("");
  console.log(id);
  
  const Viewdata = async()=>{
    //e.preventDefault();
    //const {name,location,email,subject,details}=inp;
    const res=await fetch(`/viewdata/${id}`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    });
    const data=await res.json();
    //console.log("Printing dataaa");
    console.log(data);
    if(res.status===422 || !data){
      alert("Error reported while registering complaint.Please try again.");
      console.log("error");
    }
    else{
      //alert("Complaint added");
    console.log("Get data" );
    setinp(data);

    }
  }

  

 useEffect(()=>{
  Viewdata();

 },[]) ; 


 const updatecomments=async(e)=>{
  e.preventDefault();

  const {name, location,email,subject,details,status}=inp;
  const res2=await fetch(`/updateuser/${id}`,{
    method:"PATCH",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name,location,email,subject,details,status
    })
  });

  const data2=await res2.json();
  console.log(data2);

  if(res2.status===422 || !data2){
    alert("No record found to be updated")
  }
  else{
    alert("Your comment has been added");
    History("/");
  }

 }

    return (
      <div className="container">
        <NavLink to='/'>Home2</NavLink>
        <form className="mt-4">
          <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label  className="form-label"> Name</label>
            <input type="text" className="form-control"  name="firstname" id="exampleInputEmail1" aria-describedby="emailHelp" value={inp.name} onChange={setdata}  disbaled />
          </div>
  
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label className="form-label">Location</label>
            <input type="text" className="form-control" name="lastname" id="exampleInputEmail1" aria-describedby="emailHelp" value={inp.location}   onChange={setdata} disabled/>
          </div>
  
  
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label className="form-label">Email</label>
            <input type="email"  name="email" className="form-control" id="exampleInputPassword1" value={inp.email} onChange={setdata} disabled/>
          </div>
  
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label className="form-label">Subject</label>
            <input type="password" name="subject" className="form-control" id="exampleInputPassword1"  value={inp.subject} onChange={setdata} disabled/>
          </div>
  
  
          <div className="mb-3 col-lg-12 col-md-12 col-12">
            <label className="form-label">Details</label>
            <textarea name="details" className="form-control" id="" cols="30" rows="5" value={inp.details} onChange={setdata} disabled></textarea>
          </div>
  
  
          <div className="mb-3 col-lg-12 col-md-12 col-12">
            <label className="form-label">Comments</label>
            <textarea name="status" className="form-control" id="" cols="30" rows="5" value={inp.status} onChange={setdata} ></textarea>
          </div>
     
          
  
  
          <button type="submit" className="btn btn-primary"  onClick={updatecomments}>Submit</button>
          </div>
        </form>
      
      </div>
    );
}

export default Edit;