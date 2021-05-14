import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContacPaget";

const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Conceptos Basicos</h2>
      {/* acá cargamos nuestras rutas */}
      <Router>
        {/* utilizaremos el componente Route */}

        {/* en nuestra UI no mostrará todos los componentes que coincidan 
          pro ejemplo al ingresar en la barra de navegacion 
          localhost:300/contacto nos cargará home y contacto 
        */}
        {/* <Route path="/">
          <h3>Home</h3>
          <p>Bienvenido, esta es la pagina principal</p>
        </Route>
        <Route path="/acerca">
          <h3>Acerca</h3>
        </Route>
        <Route path="/contacto">
          <h3>Contacto</h3>
        </Route> */}

        {/* si queremos que nos carge el primero que coincida 
        con nuestra ruta utilizaremos switch 
        */}
        {/* para este caso si en nuestra barra de navegacion escribimos 
        localhost:300/contacto solo nos mostrará el contacto porque es el primero que coicide 
        pero si nuestro componete home está ubicado primero nos mostrara siempre el home porque el / se encontró primero 
        Se recomienda que vayamos de las más especificas a la más genericas para que no ocurra el error anterior
        */}
        {/* <Switch>
        <Route path="/acerca">
          <h3>Acerca</h3>
        </Route>
        <Route path="/contacto">
          <h3>Contacto</h3>
        </Route>
        <Route path="/">
          <h3>Home</h3>
          <p>Bienvenido, esta es la pagina principal</p>
        </Route>
        </Switch> */}

        {/* 
         si tenemos nuestras rutas producto-android producto-apple
         habría un comflico porque solo mostraría el primero que encuntre
        para este caso usaremos exact y al momento de asignarle esta propiedad 
        solo nos mostrará si es exactamente igual
        */}
        <Switch>
          <Route exact path="/">
            <h3>Home</h3>
            <p>Bienvenido, esta es la pagina principal</p>
          </Route>
          <Route exact path="/acerca">           
            <AboutPage/>
          </Route>

          <Route exact path="/contacto">            
            <ContactPage/>
          </Route>
          {/* una de las formas para definir nuestro componente Route en una sola linea */}
          
          {/* <Route exact pat="/contact" component={ContactPage}/> */}
          {/* <Route exact pat="/contact" children={<ContactPage/>}/> */}


        </Switch>
      </Router>
    </div>
  );
};

export default ConceptosBasicos;
