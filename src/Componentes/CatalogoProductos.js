import React from "react";
import Navbar from "./Navbar";
import data from "../infoProductos.json";
import Producto from "./Producto";
import Footer from "./Footer";
import "./Contenido.css";

class CatalogoP extends React.Component {
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
                    imagen={require('../img/' + elemento.imagen)}
                    precio={elemento.precio}
                />
            );
        });

        return (
            <div className="catalogo-page">
                <Navbar />
                <div className="header-simple">
                    <h1 className="animate__animated animate__fadeInDown">Nuestro Catálogo</h1>
                    <p>Piezas únicas hechas a mano con amor</p>
                </div>

                <div className="grilla-4">
                    {arregloComp}
                </div>

                <Footer />
            </div>
        );
    }
}

export default CatalogoP;
