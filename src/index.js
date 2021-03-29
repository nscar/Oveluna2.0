import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import CatalogoP from "./Componentes/CatalogoProductos";
import ContactoP from "./Componentes/ContactoPage"
ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/CatalogoP" component={CatalogoP} />
      <Route path="/ContactoP" component={ContactoP} />
      <Route path="/" component={App} exact />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);


