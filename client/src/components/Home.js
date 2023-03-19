import React,{useState ,useEffect} from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { NavLink } from "react-router-dom";

const Home = () => {
    const [getuserdata,setuserdata]=useState([]);
   // const status="Action required";
    //console.log(getuserdata.email);


    const Viewdata = async(e)=>{
        //e.preventDefault();
        //const {name,location,email,subject,details}=inp;
        const res=await fetch("/viewdata",{
          method:"GET",
          headers:{
            "Content-Type":"application/json"
          }
        });
        const data=await res.json();
        console.log("Printing dataaa");
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
            Viewdata();
        }

      }
    return (
        
        <div className="mt-5">
            <div className="container">
                <div className="add_btn mt-2 mb-2">
                    <NavLink to="/register" className="btn btn-primary">Add data</NavLink>
                    <NavLink to="/registeration" className="btn btn-primary">Sign up</NavLink>
                </div>
               



                <table className="table">
                    <thead>
                        <tr  className="table-dark">
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Location</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        getuserdata.map((element,id,status1)=>{
                            if(element.status!=="no actions"){
                                status1="Resolved"
                            }
                            else{
                                status1="Action required"
                            }
                            return(
                                <>
                                  <tr>
                            <th scope="row">{id + 1}</th>
                            <td>{element.name}</td> 
                            <td>{element.email}</td>
                            <td>{element.subject}</td>
                            <td>{element.location}</td>
                            <td>{status1}</td>
                            
                            <td className="d-flex justify-content-between">
                                <NavLink to={`details/${element._id}`}><button className="btn btn-success"><RemoveRedEyeIcon/></button></NavLink>
                                <NavLink to={`edit/${element._id}`}><button className="btn btn-primary"><EditIcon/></button></NavLink>
                                <button className="btn btn-danger"  onClick={()=>deletecomplaint(element._id)}><DeleteForeverIcon/></button>
                            </td>
                        </tr>
                                </>
                            )
                        })
                       }     










                      
                    </tbody>
                </table>
            </div>
        </div>

    )
}
export default Home;