import React,{useState,useContext} from "react";
import { NavLink,useNavigate } from "react-router-dom";

const Register = () => {

const navigate=useNavigate("");
const[inp,setinp]=useState({
  name:"",
  location:"",
  email:"",
  subject:"",
  details:""
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
    const {name,location,email,subject,details}=inp;
    const res=await fetch('/register',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,location,email,subject,details

      })
    });
    const data=await res.json();
    console.log(data);
    if(res.status===203 || !data){
      alert("Please fill out the enteries");
      console.log("error");
    }
    else if(res.status===404)
    {
      alert("No data found");
      console.log("error");
    }
    else{
      alert("Complaint added");
    console.log("Complaint  registered" );
    navigate("/");

    }


  }
  return (
    <div className="container">
      <NavLink to='/'>Home</NavLink>
      <form className="mt-4">
        <div className="row">
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label  className="form-label">Name</label>
          <input type="text" value={inp.name} onChange={setdata} className="form-control"  name="name"  required  />
        </div>

        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label className="form-label">Last Name</label>
          <select className="form-control" value={inp.location} onChange={setdata}  name="location"  required>
            <option>Choose your location</option>
            <option>Afghanistan</option>
            <option>Albania</option>
            <option>Algeria</option>
            <option>Andorra</option>
            <option>Antigua and Barbuda</option>
            <option>Armenia</option>
            <option>Australia</option>
            <option>Austria</option>
            <option>Azerbaijan</option>
            <option>Bahamas</option>
            <option>Bahrain</option>
            <option>Bangladesh</option>
            <option>Barbados</option>
            <option>Belarus</option>
            <option>Belgium</option>
            <option>Belize</option>
            <option>Benin</option>
            <option>Bhutan</option>
            <option>Bolivia</option>
            <option>Bosnia and Herzegovina</option>
            <option>Botswana</option>
            <option>Brazil</option>
            <option>Brunei</option>
            <option>Bulgaria</option>
            <option>Burkina Faso</option>
            <option>Burundi</option>
            <option>Côte d'Ivoire</option>
            <option>Cabo Verde</option>
            <option>Cambodia</option>
            <option>Cameroon</option>
            <option>Canada</option>
            <option>Central African Republic</option>
            <option>Chad</option>
            <option>Chile</option>
            <option>China</option>
            <option>Colombia</option>
            <option>Comoros</option>
            <option>Congo (Congo-Brazzaville)</option>
            <option>Costa Rica</option>
            <option>Croatia</option>
            <option>Cuba</option>
            <option>Cyprus</option>
            <option>Czechia (Czech Republic)</option>
            <option>Democratic Republic of the Congo</option>
            <option>Denmark</option>
            <option>Djibouti</option>
            <option>Dominica</option>
            <option>Dominican Republic</option>
            <option>Ecuador</option>
            <option>Egypt</option>
            <option>El Salvador</option>
            <option>Equatorial Guinea</option>
            <option>Eritrea</option>
            <option>Estonia</option>
            <option>Eswatini (fmr. "Swaziland")</option>
            <option>Ethiopia</option>
            <option>Fiji</option>
            <option>Finland</option>
            <option>France</option>
            <option>Gabon</option>
            <option>Gambia</option>
            <option>Georgia</option>
            <option>Germany</option>
            <option>Ghana</option>
            <option>Greece</option>
            <option>Grenada</option>
            <option>Guatemala</option>
            <option>Guinea</option>
            <option>Guinea-Bissau</option>
            <option>Guyana</option>
            <option>Haiti</option>
            <option>Holy See</option>
            <option>Honduras</option>
            <option>Hungary</option>
            <option>Iceland</option>
            <option>India</option>
            <option>Indonesia</option>
            <option>Iran</option>
            <option>Iraq</option>
            <option>Ireland</option>
            <option>Israel</option>
            <option>Italy</option>
            <option>Jamacia</option>
            <option>Japan</option>
            <option>Jordan</option>
            <option>Kazakhstan</option>
            <option>Kenya</option>
            <option>Kiribati</option>
            <option>Kuwait</option>
            <option>Kyrgyzstan</option>
            <option>Laos</option>
            <option>Latvia</option>
            <option>Lebanon</option>
            <option>Lesotho</option>
            <option>Liberia</option>
            <option>Libya</option>
            <option>Liechtenstein</option>
            <option>Lithuania</option>
            <option>Luxembourg</option>
            <option>Madagascar</option>
            <option>Malawi</option>
            <option>Malaysia</option>
            <option>Maldives</option>
            <option>Mali</option>
            <option>Malta</option>
            <option>Marshall Islands</option>
            <option>Mauritania</option>
            <option>Mauritius</option>
            <option>Mexico</option>
            <option>Micronesia</option>
            <option>Moldova</option>
            <option>Monaco</option>
            <option>Mongolia</option>
            <option>Montenegro</option>
            <option>Morocco</option>
            <option>Mozambique</option>
            <option>Myanmar (formerly Burma)</option>
            <option>Namibia</option>
            <option>Nauru</option>
            <option>Nepal</option>
            <option>Netherlands</option>
            <option>New Zealand</option>
            <option>Nicaragua</option>
            <option>Niger</option>
            <option>Nigeria</option>
            <option>North Korea</option>
            <option>North Macedonia</option>
            <option>Norway</option>
            <option>Oman</option>
            <option>Pakistan</option>
            <option>Palau</option>
            <option>Palestine State</option>
            <option>Panama</option>
            <option>Papua New Guinea</option>
            <option>Paraguay</option>
            <option>Peru</option>
            <option>Philippines</option>
            <option>Poland</option>
            <option>Portugal</option>
            <option>Qatar</option>
            <option>Romania</option>
            <option>Russia</option>
            <option>Rwanda</option>
            <option>Saint Kitts and Nevis</option>
            <option>Saint Lucia</option>
            <option>Saint Vincent and the Grenadines</option>
            <option>Samoa</option>
            <option>San Marino</option>
            <option>Sao Tome and Principe</option>
            <option>Saudi Arabia</option>
            <option>Senegal</option>
            <option>Serbia</option>
            <option>Seychelles</option>
            <option>Sierra Leone</option>
            <option>Singapore</option>
            <option>Slovakia</option>
            <option>Slovenia</option>
            <option>Solomon Islands</option>
            <option>Somalia</option>
            <option>South Africa</option>
            <option>South Korea</option>
            <option>South Sudan</option>
            <option>Spain</option>
            <option>Sri Lanka</option>
            <option>Sudan</option>
            <option>Suriname</option>
            <option>Sweden</option>
            <option>Switzerland</option>
            <option>Syria</option>
            <option>Tajikistan</option>
            <option>Tanzania</option>
            <option>Thailand</option>
            <option>Timor-Leste</option>
            <option>Togo</option>
            <option>Tonga</option>
            <option>Trinidad and Tobago</option>
            <option>Tunisia</option>
            <option>Turkey</option>
            <option>Turkmenistan</option>
            <option>Tuvalu</option>
            <option>Uganda</option>
            <option>Ukraine</option>
            <option>United Arab Emirates</option>
            <option>United Kingdom</option>
            <option>United States of America</option>
            <option>Uruguay</option>
            <option>Uzbekistan</option>
            <option>Vanuatu</option>
            <option>Venezuela</option>
            <option>Vietnam</option>
            <option>Yemen</option>
            <option>Zambia</option>
            <option>Zimbabwe</option>
            </select>
          
        </div>


        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label className="form-label">Email</label>
          <input type="email"  value={inp.email} onChange={setdata} name="email" className="form-control"   required/>
        </div>

        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label className="form-label">Subject</label>
          <input type="text" value={inp.subject} onChange={setdata} name="subject" className="form-control"    required/>
        </div>


        <div className="mb-3 col-lg-12 col-md-12 col-12">
          <label className="form-label">Details</label>
          <textarea name="details" value={inp.details} onChange={setdata} className="form-control" cols="30" rows="5"  required></textarea>
        </div>
        <button type="submit" onClick={addingdata} className="btn btn-primary">Submit</button>
        </div>
      </form>
    
    </div>


  )
}

export default Register;