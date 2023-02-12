import React, { useState } from "react";
import Checkboxs from "./Checkboxs";
import "./MiniTabs.css";

function MiniTabs({
  cuota120A,
  cuota120B,
  cuota120C,
  cuota240A,
  cuota240B,
  cuota240C,
  nameCuota120,
  nameCuota240,
  nameCuotaPrinc,
  cuotaP1,
  cuotaP2,
  link120,
  link240,
  cuotaPrecio120A,
  cuotaPrecio120B,
  cuotaPrecio120C,
  cuotaPrecio240A,
  cuotaPrecio240B,
  cuotaPrecio240C,
  precioLista
}) {
  const [toggleState, setToggleState] = useState(1);

  const toggleCheck = (index) => {
    setToggleState(index);
  };

  return (
    <div className="ContainerMiniTabs">
      <div className="ContainerTop">
        <div
          className={toggleState === 1 ? "ContInput active-check" : "ContInput"}
          onClick={() => toggleCheck(1)}
          htmlFor={cuotaP1}
        >
          <label className="PrincCheckBox" htmlFor={cuotaP1}>
            <input
              type="radio"
              id={cuotaP1}
              name={nameCuotaPrinc}
              value={cuotaP1}
              onChange=""
              defaultChecked
            />
            <span className="PrincChecked"></span>
          </label>

          <label className="InputTitle" htmlFor={cuotaP1}>
            120 Cuotas
          </label>
        </div>

        <div
          className={toggleState === 2 ? "ContInput active-check" : "ContInput"}
          onClick={() => toggleCheck(2)}
          htmlFor={cuotaP2}
        >
          <label className="PrincCheckBox" htmlFor={cuotaP2}>
            <input
              type="radio"
              id={cuotaP2}
              name={nameCuotaPrinc}
              value={cuotaP2}
              onChange=""
            />
            <span className="PrincChecked"></span>
          </label>
          <label className="InputTitle" htmlFor={cuotaP2}>
            240 Cuotas
          </label>
        </div>
      </div>

      <div className="MiniTabsContent">
        <h4>Precio especial : {precioLista}</h4>
        <div
          className={
            toggleState === 1 ? "Check120  active-check-content" : "Check120"
          }
        >
          <Checkboxs
            cuota1={cuota120A}
            nameCuota={nameCuota120}
            cuotaPrecioA={cuotaPrecio120A}
            cuota2={cuota120B}
            cuotaPrecioB={cuotaPrecio120B}
            cuota3={cuota120C}
            cuotaPrecioC={cuotaPrecio120C}
            link={link120}
          />
        </div>

        <div
          className={
            toggleState === 2 ? "Check120  active-check-content" : "Check120"
          }
        >
          <Checkboxs
            cuota1={cuota240A}
            nameCuota={nameCuota240}
            cuotaPrecioA={cuotaPrecio240A}
            cuota2={cuota240B}
            cuotaPrecioB={cuotaPrecio240B}
            cuota3={cuota240C}
            cuotaPrecioC={cuotaPrecio240C}
            link={link240}
          />
        </div>
      </div>
    </div>
  );
}

export default MiniTabs;
