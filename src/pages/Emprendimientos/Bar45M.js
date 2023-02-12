import React from "react";
import InfoBares from "../../components/InfoContainers/InfoBares";
import FooterSec from "../../components/FooterSec/FooterSec";
import NavBarSec from "../../components/NavBarSec/NavBarSec";
import SlideShow from "../../components/SlideShow/SlideShow";
import Slide from "../../components/SlideShow/Slide";

export default function Bar45M2() {
  return (
    <div>
      <NavBarSec title="Emprendimientos" link="/emprendimientos" />
      <SlideShow>
        <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Bar%2FBar45M-7.jpg?alt=media&token=b371052e-da03-4b19-bea6-fcad362aee43"/>
        <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Bar%2FBar45M-9.jpg?alt=media&token=f5a25a3b-9fd2-47af-9936-561497ce7583" />
        <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Bar%2FBar45M-5.jpg?alt=media&token=40a05911-3b30-4ea6-90dd-c36f1913581f"/>
      </SlideShow>
      <InfoBares
        title="Bar 45M2"
        img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Bar%2FBar45M-1.jpg?alt=media&token=c34b62bd-7de1-454d-8f10-786d6defc9d7"
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

