import { useParams } from "react-router-dom";

const Usuario = () => {
  // let params=useParams();
  // console.log(params)
  
  // destructuramos los que pasamos en useParams(), esto nos devuelve un objeto
  let {username}=useParams();
  return (  
    <div>
      <h3>Perfil del usuario</h3>
      <p>Nombre del usuario: <b>{username}</b></p>
    </div>
  );
}
 
export default Usuario;