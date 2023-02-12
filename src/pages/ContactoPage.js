import React, { Component } from "react";
import FooterSec from "../components/FooterSec/FooterSec";
import ContactoComplete from "../components/Contacto/ContactoComplete";
import NavBarTerc from "../components/NavBarTerc/NavBarTerc";

export default class ContactoPage extends Component {
  render() {
    return (
      <div>

        <NavBarTerc title="Contacto" link="/contacto" />
        <ContactoComplete/>
        <FooterSec />
      
      </div>
    );
  }
}
