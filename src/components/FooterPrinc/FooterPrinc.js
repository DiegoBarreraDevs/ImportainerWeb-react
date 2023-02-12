import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./FooterPrinc.css";

export default class FooterPrinc extends Component {
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
      <div className="footer-p">
        <div className="container-footer-p">
          <div className="up-fo-p">
            <div className="left-fo">
              <h2 className="titulo-fo">Importainer S.A</h2>
              <p className="text-fo">
                Este es el sitio web oficial de Importainer S.A
              </p>

              <div className="social-p">
                <span className="i-style">
                  <i className="fab fa-facebook-f" onClick={this.onClickFB}></i>
                </span>
                <span className="i-style">
                  <i className="fab fa-instagram" onClick={this.onClickIG}></i>
                </span>
                <span className="i-style">
                  <i className="fab fa-whatsapp" onClick={this.onClickWPP}></i>
                </span>
                <span className="i-style">
                  <i className="fab fa-linkedin" onClick={this.onClickLK}></i>
                </span>
                <span className="i-style">
                  <i className="fab fa-youtube" onClick={this.onClickYT}></i>
                </span>
              </div>
            </div>

            <div className="right-fo">
              <div className="map-fo">
                <div className="cuad">
                  <h3 className="title-map-fo">Modelos</h3>
                  <ul className="links-fo">
                    <Link to="/casas/15M2">Conatiner 15 M2</Link>
                    <Link to="/casas/30M2">Conatiner 30 M2</Link>
                    <Link to="/casas/45M2">Conatiner 45 M2</Link>
                    <Link to="/casas/75M2">Conatiner 75 M2</Link>
                  </ul>
                </div>

                {/* <div className="cuad">
                  <h3 className="title-map-fo">Servicios</h3>
                  <ul className="links-fo">

                    <Link href="">Trabajos</Link>
                  </ul>
                </div> */}

                <div className="cuad">
                  <h3 className="title-map-fo">Recursos</h3>
                  <ul className="links-fo">
                    <Link to="/franquicias">Franquicia</Link>
                    <a href="https://www.youtube.com/c/ImportainerSA">Videos</a>
                    <a href="https://importainer.hiringroom.com/jobs">
                      Trabajos
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="down-fo-p">
          <h4 className="tif-p">Copyright @ 2021 Importainer S.A</h4>
        </div>
      </div>
    );
  }
}
