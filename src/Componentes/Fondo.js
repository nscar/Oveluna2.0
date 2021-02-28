import React from "react";
import "./Fondo.css";
class Fondo extends React.Component {
  render() {
    return (
      <div className="fondo fondo-titles">
        <div className="fondo-content animated bounce delay-2s">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="fuenteG">OVELUNA</h1> 
          <h4 className="">Arte y tejidos que hablan de ti:</h4>
        </div>
      </div>
    );
  }
}
export default Fondo;
