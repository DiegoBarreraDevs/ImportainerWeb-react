import React from "react";
import InfoPiletas from "../../components/InfoContainers/InfoPiletas";
import FooterSec from "../../components/FooterSec/FooterSec";
import NavBarSec from "../../components/NavBarSec/NavBarSec";
import SlideShow from "../../components/SlideShow/SlideShow";
import Slide from "../../components/SlideShow/Slide";

export default function Quincho15M2() {
  return (
    <div>
      <NavBarSec title="Exterior" link="/exterior" />
      <SlideShow>
        <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Exterior%2FPileta15M2-2.jpg?alt=media&token=c319101e-23d8-4caa-89cf-0a6bcb4a687a" />
        <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Exterior%2FPileta15M2-3.jpg?alt=media&token=3e9c294a-e1b2-44c5-9a74-c220d43dd30d" />
        <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Exterior%2FPileta15M2-4.jpg?alt=media&token=e5e7fab2-0dc9-45d3-8379-221288e8f837" />
      </SlideShow>
      <InfoPiletas
        title="Pileta 15M2"
        img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Exterior%2FPileta15M2-1.jpg?alt=media&token=2749e8e8-f032-4e90-8df9-6e46245368bf"
        led="04"
        medida="20 pies (6.05m de largo con un ancho
          de 2.43m)."
      />
      <FooterSec />
    </div>
  );
}
