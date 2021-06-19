import { useHistory, useLocation } from "react-router-dom";

const Products = () => {
  // http://localhost:3000/productos?inicio=20&end=40

  // destructuramos el objeto useLocation porque solo vamos a querer
  //  el search; el hook devuelve Hash,PathName,Search y state
  // en search nos devolerá el parametro de la url
  let { search } = useLocation();

  let query = new URLSearchParams(search);
  console.log(query);

  const LIMIT = 20;
  // con get hacemos que nos devuelva el valor de cada parametro (inicio, end)
  let start = parseInt(query.get("inicio")) || 1; //20
  let end = parseInt(query.get("end")) || LIMIT; //40

  let history = useHistory();
  console.log(history);

  const handlePrev = (e) => {
    history.push({ search: `?inicio=${start - LIMIT}&end=${end - LIMIT}` });
  };

  const handleNext = (e) => {
    history.push({ search: `?inicio=${start + LIMIT}&end=${end + LIMIT}` });
  };

  return (
    <div>
      <h3>Productos</h3>
      <p>
        Mostrando Productos <b>{start}</b> al <b>{end}</b>
      </p>

      {/* en primera instancia el btn prev no debería aparecer porque estaría convirtiendo a nuestro valor inicial a negativo
      por eso lo ocultaremos
      */}
      {start > LIMIT && <button onClick={handlePrev}>Prev</button>}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Products;
