import React, { Component } from "react";
import AspectosList from "../components/Aspectos/AspectosList";
import Titulo from './../components/Titulo'
import FooterSec from "../components/FooterSec/FooterSec";
import NavBarSec from "../components/NavBarSec/NavBarSec";

export default class Aspectos extends Component {
  render() {
    return (
      <div>
        <NavBarSec title="Aspectos" link="/aspectos" />
        <Titulo titulo="Aspectos" />
        <AspectosList/>
        <FooterSec />
      </div>
    );
  }
}
