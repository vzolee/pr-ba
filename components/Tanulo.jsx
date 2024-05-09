import { useContext } from "react";
import TanuloContext from "../context/TanuloContext";

function Tanulo({ tanulo, update }) {

  const { modosit, torles } = useContext(TanuloContext);

  //const modosit=(id)=>{
  //    navigate('/ujtanulo',{state:{tanulo}}) //átpasszoljuk a tanulo adatait
  ///}

  //  const torles=(id)=>{
  //    fetch(`http://localhost:8000/tanulok/${id}`, {
  //      method:"DELETE",
  //     headers:{"Content-type":"application/json"}
  //   }) //altgr 7
  //   .then(res=>res.text())
  //   .then(res=>{alert(res)()})
  //   .catch(err=>console.log(err))
  //}

  return (
    <div className="card my-5 w-96 bg-primary text-primary-content">
      <div className="card-body">
        {/* egy tanuló kártyája */}
        <h2 className="card-title">{tanulo.vezeteknev} {tanulo.keresztnev}</h2>
        <p>Kor: {tanulo.kor}</p>
        <p>Születési hely: {tanulo.szuletesi_hely}</p>
        <p>E-mail cím: {tanulo.email}</p>
        <div className="card-actions justify-end">
          <button onClick={() => document.getElementById(`modosit${tanulo.id}`).showModal()} className="btn">Módosítás</button>
          <button onClick={() =>  document.getElementById(`torles${tanulo.id}`).showModal()} className="btn">Törlés</button>
        </div>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id={`modosit${tanulo.id}`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-black">Módosítás!</h3>
          <p className="py-4 text-black">Biztosan módosítja {tanulo.vezeteknev} {tanulo.keresztnev} adatait???</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={() => modosit(tanulo)} className="btn">Igen</button>
              <button className="btn">Mégse</button>
            </form>
          </div>
        </div>
      </dialog>

      <dialog id={`torles${tanulo.id}`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-black">Törlés!</h3>
          <p className="py-4 text-black">Biztosan törli a(z) {tanulo.vezeteknev} {tanulo.keresztnev} adatait???</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={() => torles(tanulo)} className="btn">Igen</button>
              <button className="btn">Mégse</button>
            </form>
          </div>
        </div>
      </dialog>

    </div>
  )
}

export default Tanulo