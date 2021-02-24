import React from "react";
import "./Relleno.css";

class Relleno extends React.Component {
  render() {
    return (
      <section className="center">
          <div className="color">
            <div>
              <h1 className="titles">Manos a la obra</h1>
            </div>
            <div>
              <i className="fas fa-sign-language fa-10x"></i>
              <h1 className="titles">
                Todos nuestros trabajos son elaborados a mano y con mucho
                cariño.
              </h1>
            </div>
          </div>
       
      </section>
    );
  }
}

export default Relleno;
