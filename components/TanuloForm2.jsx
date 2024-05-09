import { useState, useContext } from "react";
import TanuloContext from "../context/TanuloContext";
import {useNavigate,useLocation} from "react-router-dom";

function TanuloForm2() {
  const{adatkuldes}=useContext(TanuloContext);
  const navigate=useNavigate();
  const {state}=useLocation();
  let url="http://localhost:8000/tanulok/";
  let method="POST";
  let formObj={};

  if(state!==null){
    const {tanulo}=state;
    method="PATCH";
    url=`http://localhost:8000/tanulok/${tanulo.id}`;
    formObj={
        vezeteknev:tanulo.vezeteknev,
        keresztnev:tanulo.keresztnev,
        kor:tanulo.kor,
        om_azonosito:tanulo.om_azonosito,
        szuletesi_hely:tanulo.szuletesi_hely,
        email:tanulo.email
    }

  } else {
    formObj={
        vezeteknev:"",
        keresztnev:"",
        kor:"",
        om_azonosito:"",
        szuletesi_hely:"",
        email:""
      }

  }

  

   

  const[formData,setFormData]=useState(formObj);

  const writeFormData=(e)=>{
    setFormData((prev)=>({...prev,[e.target.id]:e.target.value}));
  }

  //const adatkuldes=async (url,method,formData)=>{
  //  const keres=await fetch(url,{
  //    method:method,
  //    headers:{"Content-type":"application/json"},
  //    body:JSON.stringify(formData)
  //  });
  
 // const valasz=await keres.text();
  //alert(valasz);
//}
    
  const onSubmit=(e)=>{
    e.preventDefault();
    adatkuldes(url,method,formData);
    formObj={
    vezeteknev:"",
    keresztnev:"",
    kor:"",
    om_azonosito:"",
    szuletesi_hely:"",
    email:""};
    setFormData(formObj);
    navigate('/tanulok');
  }

  return (
    <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 justify-items-center">
      <h1 className="text-xl font-bold text-center">Tanuló adatainak módosítása</h1>
      <form onSubmit={onSubmit}>
        <div>
      <input type="text" id="vezeteknev" onChange={writeFormData} required value={formData.vezeteknev} placeholder="vezetéknév" className="input input-bordered input-info w-full max-w-xs" />
      </div>
      <div>
      <input type="text" id="keresztnev" onChange={writeFormData} required value={formData.keresztnev} placeholder="keresztnév" className="input input-bordered input-info w-full max-w-xs" />
      </div>
      <div>
      <input type="text" id="kor" onChange={writeFormData} required value={formData.kor} placeholder="életkor" className="input input-bordered input-info w-full max-w-xs" />
      </div>
      <div>
      <input type="text" id="om_azonosito" onChange={writeFormData} required value={formData.om_azonosito} placeholder="om azonosító" className="input input-bordered input-info w-full max-w-xs" />
      </div>
      <div>
      <input type="text" id="szuletesi_hely" onChange={writeFormData} required value={formData.szuletesi_hely} placeholder="születési hely" className="input input-bordered input-info w-full max-w-xs" />
      </div>
      <div>
      <input type="text" id="email" onChange={writeFormData} required value={formData.email} placeholder="e-mail" className="input input-bordered input-info w-full max-w-xs" />
      </div>
      <div>
      <button className="btn btn-primary">Küldés</button>
      </div>
      </form>
    </div>
  )
  }

export default TanuloForm2;