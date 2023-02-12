import React from "react";
import "./InfoContainer.css";

const InfoOficinas = ({ title, ventanas, img, aires }) => {
  return (
    <div class="descripcion">
      <div class="left">
        <h1>{title}</h1>
        <img src={img} alt="" class="image" />
      </div>

      <div class="right">
        <h2>Detalles Constructivos</h2>
        <div class="cont-right">
          <h3>Equipamiento</h3>
          <p>{aires} Aires acondicionados Split de 2200 F (frío/calor)</p>
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
          <h4>- Ventanas Línea Herrero</h4>
          <h4>- Con rejas como medida de seguridad</h4>
          <h4>- {ventanas} ventanas de 1.50 x 1.10m con traba interior</h4>
          <h4>- Puerta de entrada 0.80 x 2.00m de chapa inyectada</h4>
          <p>
            Opcional: <br />
            01 Ventana balcón 2.00m x 2.00m en sustitución por dos (02) ventanas
            de 1.50 x 1.10 m
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoOficinas;
