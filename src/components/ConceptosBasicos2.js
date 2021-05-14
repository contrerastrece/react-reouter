import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContacPaget";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import MenuConceptos from "./MenuConceptos";


const ConceptosBasicos2 = () => {
  return (
    <div>
      <h2>Conceptos Basicos</h2>
     
      <Router>    
          <MenuConceptos/>
        
        <Switch>

         <Route exact path="/" component={Home}/>
         <Route exact path="/acerca" component={AboutPage}/>
         <Route exact path="/contacto" component={ContactPage}/>
         {/* para que nuestra pagina 404 funciones no debe de ir exact
         y otro condicion es que en el path tiene que ir el * que se usará como comodín 
         también debemos tener en cuenta que debe de ir al útilmo para que pueda funcionar
         */}
         <Route  path="*" component={Error404}/>

        </Switch>
      </Router>
    </div>
  );
};

export default ConceptosBasicos2;
