import React from "react";
import InfoBares from "../../components/InfoContainers/InfoBares";
import FooterSec from "../../components/FooterSec/FooterSec";
import NavBarSec from "../../components/NavBarSec/NavBarSec";
import SlideShow from "../../components/SlideShow/SlideShow";
import Slide from "../../components/SlideShow/Slide";

export default function Foodtrack15M2() {
  return (
    <div>
      <NavBarSec title="Emprendimientos" link="/emprendimientos" />
      <SlideShow>
        <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Foodtrack%2FFoodtrack15M-4.jpg?alt=media&token=433d5b7e-ea0b-4e35-91ad-92fb3d4f79f4" />
        <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Foodtrack%2FFoodtrack15M-3.jpg?alt=media&token=f1194979-cfff-40a6-8b70-5e2c7285a94c" />
      </SlideShow>
      <InfoBares
        title="Foodtruck 15M2"
        img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Foodtrack%2FFoodtrack15M-1.jpg?alt=media&token=c2e6f75f-06fa-4bea-84a2-00a1eadcff83"
        baños="toilette"
        medidas="1.00 hasta 1.20m"
        mesones="02"
      />
      {/* <OfertaCard
        title="Foodtrack 15M2"
        img="https://live.staticflickr.com/65535/51674609153_83db79f768_z.jpg"
        description="Comenza tu primer negocio con este hermoso Foodtrack de 15M2, ideal para jovenes emprendedores."
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
        link120=""
        link240=""
      /> */}
      <FooterSec />
    </div>
  );
}
