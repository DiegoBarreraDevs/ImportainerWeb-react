import React from "react";
import InfoQuinchos from "../../components/InfoContainers/InfoQuinchos";
import FooterSec from "../../components/FooterSec/FooterSec";
import NavBarSec from "../../components/NavBarSec/NavBarSec";
import SlideShow from "../../components/SlideShow/SlideShow";
import Slide from "../../components/SlideShow/Slide";

export default function Quincho15M2() {
  return (
    <div>
      <NavBarSec title="Exterior" link="/exterior" />
      <SlideShow>
        <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Exterior%2FQuincho15M-3.jpg?alt=media&token=beb16517-35de-48c9-a8a4-5f696e4099c3"/>
        <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Exterior%2FQuincho15M-1.jpg?alt=media&token=b44bf85c-4445-4a60-bc49-e8159c17b542"/>
        <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Exterior%2FQuincho15M-2.jpg?alt=media&token=e3352caf-2f55-47a0-b542-eb4de7ce5c75" />
      </SlideShow>
      <InfoQuinchos
        title="Pileta 15M2"
        img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Exterior%2FQuincho15M-3.jpg?alt=media&token=beb16517-35de-48c9-a8a4-5f696e4099c3"
        ventanas="01"
      />
      <FooterSec />
    </div>
  );
}

