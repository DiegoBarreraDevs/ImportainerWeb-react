import React from "react";
import OfertaCard from "./OfertaCard";
import "./OfertaList.css";

const OfertaList = () => {
  return (
    <div className="OfertaContainer">
       <h1 className="OfertaTitle">Ofertas</h1>
      <div className="OFC">
        <div className="CardsContainer">
          <OfertaCard
            title="Casa 15M2"
            img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Casas%2FCasa15M2-3.webp?alt=media&token=f71e9639-80e3-4bd2-ad10-166a71b848ff"
            description="Vivienda tipo Monoambiente,  baño totalmente equipado y cocina.  Medida (6,05 mts de largo x 2,43 mts de ancho x 2,60 de alto). Aire acondicionado frio calor, termotanque eléctrico de 30 lts y aberturas herrero reforzada con rejas."
            cuota120A="cuota120AFoodtrack15"
            cuota120B="cuota120BFoodtrack15"
            cuota120C="cuota120CFoodtrack15"
            cuota240A="cuota240AFoodtrack15"
            cuota240B="cuota240BFoodtrack15"
            cuota240C="cuota240CFoodtrack15"
            nameCuota120="cuota120Foodtrack15"
            nameCuota240="cuota240Foodtrack15"
            nameCuotaPrinc="CuotasPrinc1"
            cuotaP1="cuota120A"
            cuotaP2="cuota240A"
            link120="/reservas"
            link240="/reservas"
            cuotaPrecio120A="CUOTA 2 – INTEGRACIÓN DE 50%: $ 695.000"
            cuotaPrecio120B="CUOTA 12 – INTEGRACIÓN DE 20%: $ 278.000"
            cuotaPrecio120C="CUOTA 24 – SIN INTEGRACIÓN "
            cuotaPrecio240A="CUOTA 2 – INTEGRACIÓN DE 50%: $ 695.000"
            cuotaPrecio240B="CUOTA 18 – INTEGRACIÓN DE 20%: $ 278.000"
            cuotaPrecio240C="CUOTA 24 – SIN INTEGRACIÓN"
            precioLista="$1.390.000"
            descuento="10"
            precioListaAntes="$1.529.000"
         />
          <OfertaCard
            title="Casa 30M2"
            img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Casas%2FCasa30M-3.webp?alt=media&token=aa9496cb-dd88-454d-b0df-6be7751afeb7"
            description="Vivienda tipo familiar.  Baño totalmente equipado y cocina. 1 a  2 dormitorios,   aire acondicionado frio calor, termotanque eléctrico de 30 lts y aberturas línea herrero reforzada, Rejas en cada abertura u opcional Portón Romano. "
            cuota120A="cuota120ALocal90"
            cuota120B="cuota120BLocal90"
            cuota120C="cuota120CLocal90"
            cuota240A="cuota240ALocal90"
            cuota240B="cuota240BLocal90"
            cuota240C="cuota240CLocal90"
            nameCuota120="cuota120Local90"
            nameCuota240="cuota240Local90"
            nameCuotaPrinc="CuotasPrinc2"
            cuotaP1="cuota120B"
            cuotaP2="cuota240B"
            link120="/reservas"
            link240="/reservas"
            cuotaPrecio120A="CUOTA 2 – INTEGRACIÓN DE 50%: $ 1.270.000"
            cuotaPrecio120B="CUOTA 12 – INTEGRACIÓN DE 20%: $ 508.000"
            cuotaPrecio120C="CUOTA 24 – SIN INTEGRACIÓN "
            cuotaPrecio240A="CUOTA 2 – INTEGRACIÓN DE 50%: $ 1.270.000"
            cuotaPrecio240B="CUOTA 18 – INTEGRACIÓN DE 20%: $ 508.000"
            cuotaPrecio240C="CUOTA 24 – SIN INTEGRACIÓN "
            precioLista="$2.540.000"
            descuento="15"
            precioListaAntes="$2.921.000"
         />
          <OfertaCard 
            title="Casa 45M2"
            img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Casas%2FCasa45M-4.webp?alt=media&token=db36b2cf-10d6-49f2-a8ea-cc09787b5883"
            description="Vivienda tipo familiar.  Baño totalmente equipado y cocina. 1 a  3 dormitorios,   aire acondicionado frio calor, termotanque eléctrico de 30 lts y aberturas línea herrero reforzada, Rejas en cada abertura u opcional Portón Romano."
            cuota120A="cuota120AQuincho30"
            cuota120B="cuota120BQuincho30"
            cuota120C="cuota120CQuincho30"
            cuota240A="cuota240AQuincho30"
            cuota240B="cuota240BQuincho30"
            cuota240C="cuota240CQuincho30"
            nameCuota120="cuota120Quincho30"
            nameCuota240="cuota240Quincho30"
            nameCuotaPrinc="CuotasPrinc3"
            cuotaP1="cuota120C"
            cuotaP2="cuota240C"
            link120="/reservas"
            link240="/reservas"
            cuotaPrecio120A="CUOTA 2 – INTEGRACIÓN DE 50%: $ 1.905.000"
            cuotaPrecio120B="CUOTA 12 – INTEGRACIÓN DE 20%: $ 762.000"
            cuotaPrecio120C="CUOTA 24 – SIN INTEGRACIÓN "
            cuotaPrecio240A="CUOTA 2 – INTEGRACIÓN DE 50%: $ 1.905.000"
            cuotaPrecio240B="CUOTA 18 – INTEGRACIÓN DE 20%: $ 762.000"
            cuotaPrecio240C="CUOTA 24 – SIN INTEGRACIÓN "
            precioLista="$3.810.000"
            descuento="20"
            precioListaAntes="4.572.000"
          />
        </div>
      </div>
    </div>
  );
};

export default OfertaList;


