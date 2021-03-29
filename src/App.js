import React from "react";
import "./App.css";
import Producto from "./Componentes/Producto";
import { Col } from "reactstrap";
import Relleno from "./Componentes/Relleno";
import Footer from "./Componentes/Footer";
import Final from "./Componentes/Final";
import "./Componentes/Contenido.css";
// import Titulo from "./Componentes/Titulo";
import { infoProductos } from "./infoProductos.json";
//import { Container } from "reactstrap";


import Fondo from "./Componentes/Fondo";
import Navbar from "./Componentes/Navbar.js";

//const Cpro = lazy(() => import("./Componentes/CatalogoProductos"));

class App extends React.Component {
  constructor() {
    super();
    this.state = { infoProductos };
  }

  render() {
    const arregloComp = this.state.infoProductos.map((elemento, i) => {
      return (
        <Producto
          key={i}
          titulo={elemento.titulo}
          imagen={require('./img/' + elemento.imagen)}
          precio={elemento.precio}
        />
      );
    });
    return (
      <Col className="noPadding"> 
        {/* <Navegacion/> */}
        <Navbar/>
        <Fondo/>
        <h1 className="center titles color">Productos</h1>
        <div className="grilla-4">{arregloComp}</div>{" "}
        {/* se cambio el container por div (ej:grid-3)*/}
        <Relleno />
        <Footer />
        <Final />
      </Col>
    );
  }
}

export default App;
