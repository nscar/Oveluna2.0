import React from 'react';
import "./Relleno.css";

class Relleno extends React.Component{
    render(){
        return(
                   <section className="center">
            <div className="">
                <div className="">
                    <div>
                        <h1 className="title">Manos a la obra</h1>
                       
                    </div>
                    <div>
                        <i className="fas fa-sign-language fa-10x"></i>
                        <h1 className="subtitle">Todos nuestros trabajos son hechos a mano y con mucho cariño.</h1>
                    </div>
                    
                </div>
    
            </div>
        </section>
           
        );
    }
}

export default Relleno;