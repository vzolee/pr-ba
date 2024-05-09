import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"

function TanuloFormMod() {
 const navigate=useNavigate(); //navigate váéltozó deklralása
 const {state}=useLocation();
 const {tanulo}=state;

 let formObj={ //a kezdő adatok lesznek elmentve a tanulónak
  vezeteknev:tanulo.vezeteknev,
  keresztnev:tanulo.keresztnev,
  kor:tanulo.kor,
  om_azonosito:tanulo.om_azonosito,
  szuletesi_hely:tanulo.szuletesi_hely,
  email:tanulo.email
 }

 const[formData,setFormData]=useState(formObj);

 const writeFormData=(e)=>{
  setFormData((prev)=>({...prev,[e.target.id]:e.target.value}));
 }
 const adatkuldes=async ()=>{
    const keres=await fetch(`http://localhost:8000/tanulok/${tanulo.id}`,{
      method:"PATCH",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(formData)
    });

    const valasz=await keres.text();
    alert(valasz);

 }

 const onSubmit=(e)=>{
  e.preventDefault();
  adatkuldes();
  formObj={
    vezeteknev:"",
    keresztnev:"",
    kor:"",
    om_azonosito:"",
    szuletesi_hely:"",
    email:""};
    setFormData(formData);
    navigate('/tanulok'); //elnavigálhatunk a gombnyomás után a tanulok listájára
  }

   



  return (
    <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 justify-items-center">
      <h1 className="text-xl font-bold text-center">Tanuló adatainak módosítása</h1>
    <form onSubmit={onSubmit}>
      <div>
    <input type="text" id="vezeteknev" onChange={writeFormData} required value={formData.vezeteknev} placeholder="Vezetéknév: " className="input input-bordered w-full max-w-xs" />
    </div> 
    <div>
    <input type="text" id="keresztnev" onChange={writeFormData} required value={formData.keresztnev} placeholder="Keresztnév: " className="input input-bordered w-full max-w-xs" />
    </div>
    <div>
    <input type="text" id="kor" onChange={writeFormData} required value={formData.kor} placeholder="Életkor: " className="input input-bordered w-full max-w-xs" />
    </div>
    <div>
    <input type="text" id="om_azonosito" onChange={writeFormData} required value={formData.om_azonosito} placeholder="om azonosító: " className="input input-bordered w-full max-w-xs" />
    </div>
    <div>
    <input type="text" id="szuletesi_hely" onChange={writeFormData} required value={formData.szuletesi_hely} placeholder="Születési hely: " className="input input-bordered w-full max-w-xs" />
    </div>
    <div>
    <input type="text" id="email" onChange={writeFormData} required value={formData.email} placeholder="e-mail cím: " className="input input-bordered w-full max-w-xs" />
    </div>
    <div>
    <button className="btn btn-primary">Küldés</button>
    </div>
    </form>

    </div>
  )
}

export default TanuloFormMod;