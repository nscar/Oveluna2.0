import React from "react";
import "./Contenido.css";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
 import FichaPage from "./FichaPage";

class Producto extends React.Component {
  render() {
    return (
      <div className="arreglo">
        <Card>
          <FichaPage props={this.props}></FichaPage> 
          <CardBody className="detalles">
            <CardTitle>{this.props.titulo}</CardTitle>
            <CardSubtitle>{this.props.precio}</CardSubtitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Producto;
