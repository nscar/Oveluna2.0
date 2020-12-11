import React from "react";
import Navegacion from "./Componentes/Navegacion";
import "./App.css";
import Producto from "./Componentes/Producto";
import { Col } from "reactstrap";
import Relleno from "./Componentes/Relleno";
import Footer from "./Componentes/Footer";
import Final from "./Componentes/Final";
import "./Componentes/Contenido.css";
// import Titulo from "./Componentes/Titulo";
import { infoProductos } from "./infoProductos.json";
import { Container } from "reactstrap";

class App extends React.Component {
  constructor() {
    super();
    this.state = { infoProductos };
  }

  render() {
    const arregloComp = this.state.infoProductos.map((infoProductos, i) => {
      return (
        <Producto
          key={i}
          titulo={infoProductos.titulo}
          imagen={infoProductos.imagen}
          precio={infoProductos.precio}
        />
      );
    });
    return (
      <Col className="noPadding">
        <Navegacion />
        <Container className="grilla-4">{arregloComp}</Container>
        <Relleno />
        <Footer />
        <Final />
      </Col>
    );
  }
}

export default App;
