import React from "react";
import "./Contenido.css";
import { Card, CardImg, CardBody, CardSubtitle, CardTitle } from "reactstrap";

class Producto extends React.Component {
  render() {
    return (
        <Card className="arreglo"> 
        <CardImg src={this.props.imagen}></CardImg>
        <CardBody className="detalles">
          <CardTitle>{this.props.titulo}</CardTitle>
          <CardSubtitle>{this.props.precio}</CardSubtitle>
        </CardBody>
      </Card>
    );
  }
}

export default Producto;
