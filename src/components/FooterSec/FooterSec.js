import React, { Component } from "react";
import "./FooterSec.css";

export default class FooterSec extends Component {
  onClickFB = async (e) => {
    window.open("https://www.facebook.com/s.a.importainer?_rdc=1&_rdr");
  };

  onClickIG = async (e) => {
    window.open("https://www.instagram.com/importainer_sa/");
  };

  onClickWPP = async (e) => {
    window.open("https://wa.link/i1y028");
  };

  onClickLK = async (e) => {
    window.open("https://www.linkedin.com/company/importainer-s-a/");
  };

  onClickYT = async (e) => {
    window.open("https://www.youtube.com/c/ImportainerSA");
  };
  render() {
    return (
      <div className="footer">
        <div className="social">
          <div className="icon" onClick={this.onClickFB}>
            <i className="fab fa-facebook-f"></i>
          </div>
          <div className="icon" onClick={this.onClickIG}>
            <i className="fab fa-instagram"></i>
          </div>
          <div className="icon" onClick={this.onClickWPP}>
            <i className="fab fa-whatsapp"></i>
          </div>
          <div className="icon" onClick={this.onClickLK}>
            <i className="fab fa-linkedin-in"></i>
          </div>
          <div className="icon" onClick={this.onClickYT}>
            <i className="fab fa-youtube"></i>
          </div>
        </div>

        <div className="copy">
          <h4 className="tif">Copyright @ 2021 Importainer S.A</h4>
        </div>
      </div>
    );
  }
}
