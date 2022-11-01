import React from "react";
import Home from "./Home";
import Menu from "./Menu";
import Produtos from "./Produtos";

const App = () => {
  const { pathname } = window.location;

  let Pagina;
  if(pathname === '/produtos') {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }

  return (
      <div>
        <Menu />
        <Pagina />
      </div>
    );
}

export default App;
