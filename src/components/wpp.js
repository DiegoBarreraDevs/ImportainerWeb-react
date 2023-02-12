import React, { Component } from "react";
import "./styles/wpp.css"

export default class Wpp extends Component {

  onClickWPP = async (e) => {
    window.open("https://wa.link/i1y028");
  };

  render() {
    return (
      <div className="logo-wpp" onClick={this.onClickWPP}>
        <i className="fab fa-whatsapp logo-set"></i>
      </div>
    );
  }
}
