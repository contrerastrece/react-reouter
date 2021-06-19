import { Link, NavLink } from "react-router-dom";

const MenuConceptos = () => {
  return (
    <nav>
      <ol>

        {/* este metodo tradicional no se recomienda
        isar porque recarga la página y eso va en contra de SPA */}
        <li>
          <span>EnlancesJ HTML no recomendados: </span>
          <a href="/">Home</a>
          <a href="/contacto">Contact</a>
          <a href="/acerca">About</a>
        </li>
        {/* esto nos genera la etiqueta <a> en el DOM pero la diferencia en que
        ya no recargará la página */}
        <li>
          <span>Componente Link: </span>
          <Link to="/">Home</Link>
          <Link to="/contacto">Contact</Link>
          <Link to="/acerca">About</Link>
        </li>
        {/* El NavLink es lo mismo que el componente Link a diferencia que 
        esta nos permite enviarle una clase de active */}
        <li>
          <span>Componente NavLink: </span>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
          <NavLink exact to="/contacto" activeClassName="active">Contact</NavLink>
          <NavLink exact to="/acerca" activeClassName="active">About</NavLink>
          <NavLink exact to="/no-existe" activeClassName="active">Error 404</NavLink>
        </li>
        <li>
          <span>Parametros: </span>
          <Link to="/user/vcontreras">Vcontreras</Link>
          <Link to="/user/somebody">Somebody</Link>
        </li>

        <li>
          <span>Parametros de consulta</span>
          <Link to="/productos"> Productos</Link>
        </li>
      </ol>
    </nav>
  );
};

export default MenuConceptos;
