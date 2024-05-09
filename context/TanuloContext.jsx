import { useState,useEffect,createContext } from "react";
import { useNavigate } from "react-router-dom";

const TanuloContext=createContext();

export const TanuloProvider=({children})=>{
    const navigate=useNavigate();
    const[tanulok,setTanulok]=useState([]);
    const[isLoading,setIsLoading]=useState(false);
    const[refresh,setRefresh]=useState(false);

    const update=()=>{
        setRefresh(prev=>!prev);
    }

    const adatkuldes=async (url,method,formData)=>{
      const keres=await fetch(url,{
        method:method,
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(formData)
      });
  
      const valasz=await keres.text();
      update();
      alert(valasz);
    }

    const modosit=(tanulo)=>{
      navigate('/ujtanulo',{state:{tanulo}}) //átpasszoljuk a tanulo adatait
    }

    const torles=(id)=>{
      fetch(`http://localhost:8000/tanulok/${id}`, {
        method:"DELETE",
        headers:{"Content-type":"application/json"}
      }) //altgr 7
      .then(res=>res.text())
      .then(res=>{alert(res)()})
      .catch(err=>console.log(err))
    }
    useEffect(()=>{
        setIsLoading(true);
        fetch('http://localhost:8000/tanulok')
        .then(res=>res.json())
        .then(tanulok=>{setTanulok(tanulok);console.log(tanulok); setIsLoading(false);})
        .catch(err=>console.log(err));
  
      },[refresh])


    return <TanuloContext.Provider value={{tanulok,isLoading,update, adatkuldes, modosit,torles}}>{children}</TanuloContext.Provider>
}

export default TanuloContext;