/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Header.css";
class Navegacion extends React.Component {
  render() {
    return (
        <header>
      <div className="menu">
        <nav className="">
          <a href="/Oveluna2.0">
            <h3>Home</h3>
          </a>
          <a href="/Oveluna2.0/CatalogoP">
            <h3>Productos</h3>
          </a>
          <a href="/Oveluna2.0">
            <h3>Contacto</h3>
          </a>
        </nav>
      </div>
    </header>
    );
  }
}
export default Navegacion;
