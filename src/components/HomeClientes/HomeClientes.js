import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./HomeClientes.css";

export default class HomeClientes extends Component {
  render() {
    return (
      <section className="clientes">
        <h2 className="pr">Clientes</h2>
        <div className="gal">
          <div className="cards">
            <img
              src="https://live.staticflickr.com/65535/51566117695_1adb9306a3_k.jpg"
              alt=""
              loading="lazy"
            />
            <div className="content-card">
              <h4>Laura Gonzales | Container 30M2</h4>
              <p>
                "Nunca crei que podria tener mi propia casa, no me queda mas que
                agradecerle a Importainer de corazón. Es increible que hayan
                podido traer el container hasta Santa Fe"
              </p>
            </div>
          </div>
          <div className="cards">
            <img
              src="https://live.staticflickr.com/65535/51564389267_88ccd43202_k.jpg"
              alt=""
              loading="lazy"
            />
            <div className="content-card">
              <h4>Marcos Ruben | Container 15M2</h4>
              <p>
                "Con Importainer compré mi primera casa siendo joven y quede muy
                satisfecho. Tienen una atención especial en los detalles"
              </p>
            </div>
          </div>
          <div className="cards">
            <img
              src="https://live.staticflickr.com/65535/51564389097_5609995a81_k.jpg"
              alt=""
              loading="lazy"
            />
            <div className="content-card">
              <h4>Cintia Olives | Container 45M2</h4>
              <p>
                "Gracias a Importainer pudimos cumplir nuestro sueño familiar y
                ahora vivimos mas que contentos en nuestra hermosa casa
                container"
              </p>
            </div>
          </div>
        </div>

        {/* <div className="boton-clientes">
          <Link className="btn2" to="./testimonios">
                Testimonios
          </Link>
        </div> */}
      </section>
    );
  }
}
