import React from "react";
import "./Fondo.css";
class Fondo extends React.Component {
  render() {
    return (
      <div className="fondo fondo-titles">
        <div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="animate__animated animate__slideInDown">
        <h1>OVELUNA</h1> 
        </div>
          <h4>Arte y tejidos que hablan de ti:</h4>
        </div>
      </div>
    );
  }
}
export default Fondo;
