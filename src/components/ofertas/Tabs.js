import React, { useState } from "react";
import { Link } from "react-router-dom";
import MiniTabs from "./MiniTabs";
import "./Tabs.css";

function Tabs({
  linkContado,
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
  precioLista,
  precioListaAntes,
}) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="ContainerTabs">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Contado
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Plan Cuotas
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h3 className="tituloSangria">
            Plan Contado: <hr />
          </h3>
          <h3 className="sangria descuento-cont">
            - Precio Antes: {precioListaAntes} <hr />
          </h3>
          <h3 className="sangria">
            - Precio Ahora: {precioLista} <hr />
          </h3>

          <div className="ContTabBoton">
            <Link className="TabBoton" to="/reservas">
              Reservar
            </Link>
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h3 className="tituloSangria">
            Plan Cuotas: <hr />
          </h3>
          <MiniTabs
            nameCuotaPrinc={nameCuotaPrinc}
            nameCuota120={nameCuota120}
            nameCuota240={nameCuota240}
            cuota120A={cuota120A}
            cuota120B={cuota120B}
            cuota120C={cuota120C}
            cuota240A={cuota240A}
            cuota240B={cuota240B}
            cuota240C={cuota240C}
            cuotaP1={cuotaP1}
            cuotaP2={cuotaP2}
            link120={link120}
            link240={link240}
            cuotaPrecio120A={cuotaPrecio120A}
            cuotaPrecio120B={cuotaPrecio120B}
            cuotaPrecio120C={cuotaPrecio120C}
            cuotaPrecio240A={cuotaPrecio240A}
            cuotaPrecio240B={cuotaPrecio240B}
            cuotaPrecio240C={cuotaPrecio240C}
            precioLista={precioLista}
          />
        </div>
      </div>
    </div>
  );
}

export default Tabs;
