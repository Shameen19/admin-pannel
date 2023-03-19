import React,{useState,useEffect} from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import EmailIcon from '@mui/icons-material/Email';
import SubjectIcon from '@mui/icons-material/Subject';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {NavLink, useParams,useNavigate} from 'react-router-dom';

const Details = () => {

  const navigate=useNavigate("");
  const {id}=useParams("");
  console.log(id);

  const [getuserdata,setuserdata]=useState([]);
  console.log(getuserdata);

  
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
    setuserdata(data);

    }
  }

  

 useEffect(()=>{
  Viewdata();

 },[]) 

 const deletecomplaint=async(id)=>{
  const res2=await fetch(`/deleterecord/${id}`,{
      method: "DELETE",
      headers:{
          "Content-Type":"application/json"
      }
  });

  const deletedata=await res2.json();
  console.log(deletedata);

  if(res2.status===422 || !deletedata){
      console.log("error");
  }
  else{
      console.log("Data is successfuly delted ");
      navigate("/");
      
  }

}

  return (
    <div className="container mt-3">
      <h1 style={{ fontWeight: 400 }}>View Data of Shameen Shahid</h1>


      <Card sx={{ maxWidth: 680 }}>
        <CardContent>
        <div className="add_btn">
              <NavLink to={`/edit/${getuserdata._id}`}><button className="btn btn-primary mx-2"><EditIcon/> </button></NavLink>
              <button className="btn btn-danger" onClick={()=>deletecomplaint(getuserdata._id)}><DeleteForeverIcon/></button>
              </div>
          <div className="row">
            <div className="left_view col-lg-6 col-md-6 col-12">
              <Avatar sx={{ width: 56, height: 56 }} src="/broken-image.jpg" />
              <h3 className="mt-3">Name:<span style={{ fontWeight: 400 }}>{getuserdata.name}</span></h3>
              <p className="mt-3"><EmailIcon /> Email:<span>{getuserdata.email}</span></p>
              <p className="mt-3"><SubjectIcon />Subject:<span>{getuserdata.subject}</span></p>
            </div>
            <div className="right_view col-lg-6 col-md-6 col-12 " style={{marginTop:92}}>
              
              <p className="mt-3"><LocationOnIcon />Location: <span>{getuserdata.location}</span></p>
              <p className="mt-3">Descitption: <span>{getuserdata.details}</span></p>

            </div>
          </div>


        </CardContent>
      </Card>
    </div>
  )
};

export default Details;