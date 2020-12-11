/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import "./Navegacion.css";

class Navegacion extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="skin">
          <nav>
            <a href="">
              <h3>Inicio</h3>
            </a>
            <a href="">
              <h3>Productos</h3>
            </a>
            <a href="">
              <h3>Contacto</h3>
            </a>
          </nav>
        </div>

        <div className="header-content animated bounce delay-2s">
          <h1 className="fuenteG">OVELUNA</h1>
          <h5>Arte y tejidos que hablan de ti:</h5>
        </div>
      </header>
    );
  }
}
export default Navegacion;
