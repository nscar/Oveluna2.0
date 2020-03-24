import React from 'react';
import "./Contenido.css";
import img1 from '../img/1.JPG';
import img2 from '../img/2.JPG';
import img3 from '../img/3.JPG';

class Contenido extends React.Component{
    render(){
        return(
            <section className="expand-center">
            <h1 className="title">Productos</h1>
    <div className="container-img grid-3">
        
            <div>
                    <img src={img1} alt=""/>
                    <h1 className="detalles">Posa vasos</h1>
                    <h1 className="detalles">$4.000</h1>
            </div>

            <div>
                    <img src={img2} alt=""/>
                    <h1 className="detalles">Posa vasos</h1>
                    <h1 className="detalles">$3.900</h1>
            </div>

            <div>
                    <img src={img3} alt=""/>
                    <h1 className="detalles">Posa vasos</h1>
                    <h1 className="detalles">$4.900</h1>
            </div>
    </div>
           
        </section>
          
 
        );
    }
}

export default Contenido;