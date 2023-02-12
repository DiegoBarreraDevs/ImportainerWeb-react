import React from "react";
import InfoPiletas from "../../components/InfoContainers/InfoPiletas";
import FooterSec from "../../components/FooterSec/FooterSec";
import NavBarSec from "../../components/NavBarSec/NavBarSec";
import SlideShow from "../../components/SlideShow/SlideShow";
import Slide from "../../components/SlideShow/Slide";

export default function Quincho30M2() {
  return (
    <div>
      <NavBarSec title="Exterior" link="/exterior" />
      <SlideShow>
        <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Exterior%2FPileta30M-3.jpg?alt=media&token=f0bce7da-fc02-4c80-aaa4-113fa3fe7afe"/>
        <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Exterior%2FPileta30M-2.jpg?alt=media&token=211bc208-0b7b-48aa-bb53-430d5392835b"/>
        <Slide img="https://live.staticflickr.com/65535/51688459471_579d316bb4_z.jpg" />
      </SlideShow>
      <InfoPiletas
        title="Pileta 30M2"
        img="https://live.staticflickr.com/65535/51687113803_1314fb0997_z.jpg"
        led="06"
        medida="40 pies (12.19m de largo con un ancho
          de 2.43m)."
      />
      <FooterSec />
    </div>
  );
}

