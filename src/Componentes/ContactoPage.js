import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import * as FaIcons from "react-icons/fa";
import "./Contenido.css";

class ContactoP extends React.Component {
    render() {
        return (
            <div className="contacto-page">
                <Navbar />

                <div className="contacto-container">
                    <div className="contacto-card animate__animated animate__fadeIn">
                        <h1>Contacto</h1>
                        <div className="divider-small"></div>
                        <p className="subtitle">¿Tienes alguna duda o quieres un pedido personalizado?</p>

                        <div className="contacto-info-list">
                            <div className="info-item">
                                <FaIcons.FaEnvelope />
                                <span>hola@oveluna.com</span>
                            </div>
                            <div className="info-item">
                                <FaIcons.FaInstagram />
                                <span>@oveluna_art</span>
                            </div>
                            <div className="info-item">
                                <FaIcons.FaMapMarkerAlt />
                                <span>Santiago, Chile</span>
                            </div>
                        </div>

                        <button className="btn-contacto-ig" onClick={() => window.open('http://www.Instagram.com', '_blank')}>
                            Escríbenos por Instagram
                        </button>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default ContactoP;