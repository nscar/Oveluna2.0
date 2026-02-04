import React from "react";
import "./App.css";
import Producto from "./Componentes/Producto";
import { Col } from "reactstrap";
import Relleno from "./Componentes/Relleno";
import Footer from "./Componentes/Footer";
import Final from "./Componentes/Final";
import "./Componentes/Contenido.css";
import data from "./infoProductos.json";
import Fondo from "./Componentes/Fondo";
import Navbar from "./Componentes/Navbar.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = { infoProductos: data.infoProductos || [] };
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
        <Navbar />
        <Fondo />
        <h1 className="center titles color">Productos</h1>
        <div className="grilla-4">{arregloComp}</div>
        <Relleno />
        <Footer />
        <Final />
      </Col>
    );
  }
}

export default App;
