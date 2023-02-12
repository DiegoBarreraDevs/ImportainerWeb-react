import React from "react";
import InfoOficinas from "../../components/InfoContainers/InfoOficinas";
import FooterSec from "../../components/FooterSec/FooterSec";
import NavBarSec from "../../components/NavBarSec/NavBarSec";
import SlideShow from "../../components/SlideShow/SlideShow";
import Slide from "../../components/SlideShow/Slide";

export default function Oficina60M2() {
  return (
    <div>
      <NavBarSec title="Oficinas" link="/oficinas" />
      <SlideShow>
        <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Oficinas%2FOficina60M-7.jpg?alt=media&token=40d5b967-80e6-4729-8258-6987fc5104e5"/>
        <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Oficinas%2FOficina60M-9.jpg?alt=media&token=f411de2e-130c-4c39-a902-dedcc29ffa07"/>
      </SlideShow>
      <InfoOficinas
        title="Oficina 60M2"
        img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Oficinas%2FOficina60M-3.jpg?alt=media&token=4fd94e4e-b324-46f6-be8d-5cd3763e0231" 
        ventanas="07"
      />
      <FooterSec />
    </div>
  );
}
