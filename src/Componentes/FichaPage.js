import React from 'react';
import {Modal, ModalBody, CardImg} from "reactstrap";
// import { listaCarrito } from "../listaCarrito.json"

class FichaPage extends React.Component {
    constructor(){
        super();
        this.state = {
            modal: false,
            // listaCarrito,       
        };

        this.click = this.click.bind(this);
    }
    
    click =() => {
        if (!this.state.modal) {
            document.addEventListener("click", this.handleOutsideClick, false);
          } else {
            document.removeEventListener("click", this.handleOutsideClick, false);
          }
        this.setState((prevState) => ({
            modal: !prevState.modal,
        }));
    };
    handleOutsideClick = e => {
        if (!this.node.contains(e.target)) this.click();
      };
      
    render(){
        return(
          <div ref={node => {this.node = node;}} className="zoom-restraint">
              <CardImg className="zoom" onClick={this.click} src={this.props.props.imagen}></CardImg>
              <Modal isOpen={this.state.modal}>
                  <ModalBody>
                      <CardImg src={this.props.props.imagen}></CardImg>
                  </ModalBody> 
              </Modal>   
          </div>      
        )
    }   
}

export default FichaPage;
