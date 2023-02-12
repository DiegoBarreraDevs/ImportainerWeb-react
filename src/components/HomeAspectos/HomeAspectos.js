import React from "react";
import { Link } from "react-router-dom";
import "./HomeAspectos.css";
import test1 from "./../../images/test/test1.jpg";
import test2 from "./../../images/test/test2.jpg";
import fibra from "./../../images/test/firbra.jpg";

export default function HomeAspectosCard() {
  return (
    <div>
      <section className="aspectos container">
        <h2 className="pr">Aspectos</h2>
        <div className="galeria-asp">
          <div className="card-asp">
            <img src={test1} alt="" loading="lazy" />
            <div className="card-asp-content">
              <h4>Container</h4>
              <p>
                El material de los contenedores marítimos es Acero Autopatinable
                o también conocido como Acero Corten. Es un tipo de acero
                fabricado de una composición química que le proporciona
                características unicas que protegen las piezas ante cualquier
                tipo de corrosión u oxidación.
              </p>
            </div>
            <div className="boton">
              <Link className="btn2" to="./aspectos">
                Ver Mas
              </Link>
            </div>
          </div>
          <div className="card-asp">
            <img src={fibra} alt="" loading="lazy" />
            <div className="card-asp-content">
              <h4>Aislación térmica</h4>
              <p>
                La lana de vidrio es una fibra mineral fabricada con millones de
                filamentos de vidrio unidos con un aglutinante. El espacio libre
                con aire atrapado entre las fibras aumentan la resistencia a
                la transmisión del frio y calor.
              </p>
            </div>
            <div className="boton">
              <Link className="btn2" to="./aspectos">
                Ver Mas
              </Link>
            </div>
          </div>
          <div className="card-asp">
            <img src={test2} alt="" loading="lazy" />
            <div className="card-asp-content">
              <h4>Pilotes</h4>
              <p>
                Simplemente con la construcción de pilotes de 40 x 40 cm en
                forma de cubo con una altura indeterminada (queda a gusto del
                cliente) nos ahorramos grandes cantidades de dinero (a
                comparación de si se construiría una base, platea, estructura o
                encadenado).
              </p>
            </div>
            <div className="boton">
              <Link className="btn2" to="./aspectos">
                Ver Mas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
