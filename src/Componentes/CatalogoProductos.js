import React from "react";
import Navbar from "./Navbar"
class CatalogoP extends React.Component{
    render(){
        return(
           <div>
               <Navbar/>
               <div className="productos">
               <h1>Productos</h1>
               </div>
           </div>
        );
    }
}
export default CatalogoP

