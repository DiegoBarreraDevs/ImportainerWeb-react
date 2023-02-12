import React from "react";
import "./OfertaCard.css";
import Tabs from "./Tabs";

const OfertaCard = ({
  title,
  img,
  description,
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
  descuento,
  precioListaAntes
}) => {
  return (
    <div className="OfertaCard">
      <div className="OfertaCardTop">
        <h2 className="OfertaCardTitle">{title}</h2>
        <h3 className="Descuento">-{descuento}%</h3>
      </div>
      <div className="OfertaContImg">
        <img src={img} alt="" ClassName="img-oferta" loading="lazy" />
      </div>
      <p className="OfertaCardDesc">{description}</p>
      <h3 className="OfertaCardSubtitle">Condicion de pago</h3>

      <Tabs
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
        precioListaAntes={precioListaAntes}
      />
    </div>
  );
};

export default OfertaCard;
