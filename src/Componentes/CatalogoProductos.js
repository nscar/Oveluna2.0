import React from "react";
import Navegacion from "./Header";
class CatalogoP extends React.Component{

    render(){
        return(
           <div>
               <Navegacion/>
               <h1 className="titles center">Productos</h1>
           </div>
        );
    }
}
export default CatalogoP