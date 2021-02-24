/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Row} from "react";
import "./Header.css";
class Navegacion extends React.Component {
  render() {
    return (
        <header>
      <div className="menu">
        <nav className="">
          <a href="/">
            <h3>Inicio</h3>
          </a>
          <a href="/CatalogoP">
            <h3>Productos</h3>
          </a>
          <a href="/">
            <h3>Contacto</h3>
          </a>
        </nav>
      </div>
    </header>
    );
  }
}
export default Navegacion;
