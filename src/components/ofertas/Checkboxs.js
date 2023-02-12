import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Checkboxs.css";

function Checkboxs({
  cuota1,
  cuotaPrecioA,
  nameCuota,
  cuota2,
  cuotaPrecioB,
  cuota3,
  cuotaPrecioC,
  link
}) {
  const [cuota, setCuota] = useState("");

  const handleChange = (e) => {
    setCuota({
      ...cuota,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se ha enviado");
  };

  return (
    <div className="ContainerCheboxes">
      <form onsubmit={handleSubmit} className="CheckBox">
        {/* ===== Cuota 1 ====== */}
        <div className="InputLabel">
          <label className="CustomCheck" htmlFor={cuota1}>
            <input
              type="radio"
              id={cuota1}
              name={nameCuota}
              value={cuota1}
              onChange={handleChange}
            />

            <span className="CheckMark"></span>
          </label>

          <label htmlFor={cuota1} className="PrecioCuota">{cuotaPrecioA}</label>
        </div>
        {/* ===== Cuota 2 ====== */}
        <div className="InputLabel">
          <label className="CustomCheck" htmlFor={cuota2}>
            <input
              type="radio"
              id={cuota2}
              name={nameCuota}
              value={cuota2}
              onChange={handleChange}
              defaultChecked
            />

            <span className="CheckMark"></span>
          </label>

          <label htmlFor={cuota2} className="PrecioCuota">{cuotaPrecioB}</label>
        </div>
        {/* ===== Cuota 3 ====== */}
        <div className="InputLabel">
          <label className="CustomCheck" htmlFor={cuota3}>
            <input
              type="radio"
              id={cuota3}
              name={nameCuota}
              value={cuota3}
              onChange={handleChange}
            />

            <span className="CheckMark"></span>
          </label>

          <label htmlFor={cuota3} className="PrecioCuota">{cuotaPrecioC}</label>
        </div>
        <br />
        <div className="ContCheckBoxBtn">
          <Link className="CheckBoxBtn" to={link}>
            Reservar
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Checkboxs;
