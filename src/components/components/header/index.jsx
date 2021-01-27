import React from "react";

import Container from './styled';

function Header() {
  return (
    <Container >
      <div className="group_A">
        <div className="hamburguer">
          <div className="barra1 ham"></div>
          <div className="barra2 ham"></div>
          <div className="barra3 ham"></div>
        </div>
        <input type="text" className="buscar" placeholder="buscar" />
      </div>
    </Container>
  );
}

export default Header;
