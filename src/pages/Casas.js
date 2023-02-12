import React from "react";
import CardList from "../components/ProyectosCards/CardList";
import Titulo from "../components/Titulo";
import NavBarSec from "../components/NavBarSec/NavBarSec";
import FooterSec from "../components/FooterSec/FooterSec";

const Casas = () => {
  return (
    <div>
      <NavBarSec title="Casas" link="/proyectos"/>
      <Titulo titulo="Casas" />

      <CardList />

      <FooterSec />
    </div>
  );
};

export default Casas;
