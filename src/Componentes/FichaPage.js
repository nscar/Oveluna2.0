import React from 'react';
import { Modal, ModalBody } from "reactstrap";
import * as AiIcons from 'react-icons/ai';

class FichaPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        };
    }

    toggle = (e) => {
        if (e) e.stopPropagation();
        this.setState({
            modal: !this.state.modal,
        });
    };

    render() {
        const { titulo, imagen, precio } = this.props.props;
        return (
            <div className="zoom-restraint">
                {/* Imagen miniatura en la grilla */}
                <img
                    className="zoom card-img-top"
                    onClick={this.toggle}
                    src={imagen}
                    alt={titulo}
                    style={{ cursor: 'zoom-in', width: '100%', display: 'block' }}
                />

                {/* Visualizador Lightbox Premium - Texto dentro de la foto */}
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    centered
                    size="xl"
                    contentClassName="lightbox-content"
                    backdropClassName="lightbox-backdrop"
                    fade={true}
                >
                    <div className="lightbox-wrapper" onClick={this.toggle}>
                        <button className="lightbox-close" onClick={this.toggle} aria-label="Cerrar">
                            <AiIcons.AiOutlineClose />
                        </button>

                        <ModalBody className="p-0 lightbox-container-center" onClick={(e) => e.stopPropagation()}>
                            <div className="lightbox-image-box">
                                <img src={imagen} alt={titulo} className="lightbox-img-premium" />

                                {/* TEXTO DENTRO DE LA FOTO - BOTTOM LEFT */}
                                <div className="lightbox-info-overlay">
                                    <div className="lightbox-text-content">
                                        <h3>{titulo}</h3>
                                        <p className="lightbox-description">Artesanía exclusiva de Oveluna</p>
                                        <div className="lightbox-divider"></div>
                                        <span className="lightbox-price-tag">{precio}</span>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default FichaPage;
