import React from "react";
import Navegacion from './Componentes/Navegacion';
import "./App.css";
import Contenido from "./Componentes/Contenido";
import { Row } from "reactstrap";
import Relleno from "./Componentes/Relleno";
import Footer from "./Componentes/Footer";
import Final from "./Componentes/Final";

function App() {
  return (
  <Row>
  <Navegacion/>
  <Contenido/>
  <Relleno/>
  <Footer/>
  <Final/>
  </Row>
  );
}

export default App;

