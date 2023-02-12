import React, { Component } from "react";
import "./../NavBarSec/NavBarSec.css";
import { Link } from "react-router-dom";
import LogoImportainer from "./../../images/Logo500.png";

export default class NavBarTerc extends Component {
  //Show - remove menu
  firstClick() {
    document.querySelector(".nav-menu").classList.toggle("show");
    document.getElementById("nav-icon").classList.toggle("fa-times");
  }

  render() {
    const { title, link } = this.props;

    return (
      <div className="header">
        <div className="menu-bar">
          <div className="logo-princ">
            <Link to="/">
              <img src={LogoImportainer} className="logo" alt="logo" />
            </Link>
          </div>

          <nav className="nav-menu" id="nav-menu">
            <ul className="nav-right">
              <Link to={link} className="subrayado">
                {title}
              </Link>
              <Link to="/">Inicio</Link>
            </ul>
          </nav>
        </div>

        <div className="menu-btn-s" id="menu-btn">
          <i
            className="fas fa-bars fa-2x"
            id="nav-icon"
            onClick={this.firstClick}
          ></i>
        </div>
      </div>
    );
  }
}
