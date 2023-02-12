import React from "react";
import InfoBares from "../../components/InfoContainers/InfoBares";
import FooterSec from "../../components/FooterSec/FooterSec";
import NavBarSec from "../../components/NavBarSec/NavBarSec";
import SlideShow from "../../components/SlideShow/SlideShow";
import Slide from "../../components/SlideShow/Slide";

export default function Foodtrack30M2() {
  return (
    <div>
      <NavBarSec title="Emprendimientos" link="/emprendimientos" />
      <SlideShow>
        <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Foodtrack%2FFoodtrack30M-2.jpg?alt=media&token=0075c5e3-ae56-4510-9a9d-ee6b743c0bc7" />
        <Slide img="https://live.staticflickr.com/65535/51686479926_29bb6e9b53_z.jpg" />
      </SlideShow>
      <InfoBares
        title="Foodtruck 30M2"
        img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Foodtrack%2FFoodtrack30M-4.jpg?alt=media&token=043126a7-3dab-46e8-be53-af7cb82ad545"
        baños="toilette damas y caballeros"
        equipamiento="01 Mesón para barra de 4.50 x 0.50m incluye apertura de mueble para
        paso."
        medidas="1.20 hasta 1.80m"
        mesones="02"
      />
      <FooterSec />
    </div>
  );
}
