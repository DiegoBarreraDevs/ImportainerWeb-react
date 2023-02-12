import React from "react";
import "./InfoContainer.css";

const InfoPiletas = ({ title, img, led, medida }) => {
  return (
    <div class="descripcion">
      <div class="left">
        <h1>{title}</h1>
        <img src={img} alt="" class="image" />

        <h2>Detalles Constructivos</h2>

        <div class="cont-right">
          <h3>Materiales</h3>
          <p>
            Fibra de vidrio de 1er calidad y reforzada para evitar
            deformaciones.
          </p>
        </div>
      </div>

      <div class="right">
        <div class="cont-right">
          <h3>Componentes</h3>
          <h4>
            - 01 Filtro soplado de 5 vías con capacidad de filtrado de 50m3 de
            agua y bomba
          </h4>
          <h4>- 02 Filtros jet.</h4>
          <h4>- 01 Pico para conectar barre fondo.</h4>
          <h4>- {led} Apliques led.</h4>
        </div>

        <div class="cont-right">
          <h3>Descripcion:</h3>
          <p>
            - Realizada con un contenedor de {medida}. <br />
            - Consta de una altura de 1.40m con una profundidad de 1.20m. <br />
            - Incluye solárium en deck de Eucaliptus Grandis de 3.00m de largo y
            2.43m de ancho con un espesor de 1 pulgada.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoPiletas;
