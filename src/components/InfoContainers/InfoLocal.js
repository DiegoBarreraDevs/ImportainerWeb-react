import React from "react";
import "./InfoContainer.css";

const InfoLocal = ({ title, img }) => {
  return (
    <div class="descripcion">
      <div class="left">
        <h1>{title}</h1>
        <img src={img} alt="" class="image" />

        <h2>Detalles Constructivos</h2>

        <div class="cont-right">
          <h3>Aberturas:</h3>
          <h4>- Contará con apertura de ambos laterales de 4.70 x 2.00 m</h4>
          <p>
            Complementos: <br />- Apertura de laterales tipo decks retraibles de
            4.70 x 2.00 m <br />- Sistema de fácil apertura de laterales del
            local.
          </p>
        </div>
      </div>

      <div class="right">
        <div class="cont-right">
          <h3>Revestimientos</h3>
          <h4>Interior:</h4>
          <h4>- Madera en listones tipo deck.</h4>
          <h4>Exterior:</h4>
          <h4>
            - Esmalte sintético, color a elección de línea Emapi o Tersuave,
            colores estándar a decidir por el cliente
          </h4>
          <h4>- Aislación térmica y acústica: Lana de vidrio de 20mm.</h4>
        </div>

        <div class="cont-right">
          <h3>Pisos</h3>
          <h4>Interior:</h4>
          <h4>- Vinílico símil madera (alto tránsito)</h4>
          <h4>
            - Hidrolaqueado, piso original del contenedor tratado con dos manos
            de hidrolaca.
          </h4>
          <h4>- Tipo deck de madera saligna</h4>
          <h4>Exterior:</h4>
          <h4>- Revestimiento de madera tipo deck.</h4>
        </div>
      </div>
    </div>
  );
};

export default InfoLocal;
