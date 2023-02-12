import React from "react";
import "./InfoContainer.css";

const InfoQuinchos = ({ title, ventanas, img }) => {
  return (
    <div class="descripcion">
      <div class="left">
        <h1>{title}</h1>
        <img src={img} alt="" class="image" />

        <h2>Detalles Constructivos</h2>

        <div class="cont-right">
          <h3>Baños:</h3>
          <h4>- Vanitory</h4>
          <h4>- Lavamanos</h4>
          <h4>- Inodoro</h4>
          <h4>- Griferías (Marca Piazza, Moza o Hidro)</h4>
          <p>El baño contará con revestimiento cerámico (a media altura).</p>
        </div>
      </div>

      <div class="right">
        <div class="cont-right">
          <h3>Cocina:</h3>
          <h4>- 01 Bajo mesada de 1.20m</h4>
          <h4>- Mesada de granito sintético de 1.20m</h4>
          <h4>- Bacha de acero inoxidable</h4>
        </div>

        <div class="cont-right">
          <h3>Revestimientos</h3>
          <p>
            Interior: Placa de yeso color blanco (Durlock).
            <br />
            Exterior: Esmalte sintético, color a elección de línea Emapi o
            Tersuave, colores estándar a decidir por el cliente. <br />
            Aislación térmica y acústica: Lana de vidrio de 50mm.
          </p>
        </div>

        <div class="cont-right">
          <h3>Aberturas:</h3>
          <h4>- Ventanas Línea Herrero con vidrio de 3mm</h4>
          <h4>- {ventanas} ventana de 1.50 x 1.10m con traba interior</h4>
          <h4>- 02 Ventanas balcón de 4.50 x 2.00m</h4>
          <h4>- 01 Ventana 0.60 x 0.40m para baño</h4>
          <p>Opcional: Portón Romano de 1.50 x 2.00 m</p>
        </div>
      </div>
    </div>
  );
};

export default InfoQuinchos;
