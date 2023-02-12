import React from "react";
import InfoQuinchos from "../../components/InfoContainers/InfoQuinchos";
import FooterSec from "../../components/FooterSec/FooterSec";
import NavBarSec from "../../components/NavBarSec/NavBarSec";
import SlideShow from "../../components/SlideShow/SlideShow";
import Slide from "../../components/SlideShow/Slide";

export default function Quincho30M2() {
  return (
    <div>
      <NavBarSec title="Exterior" link="/exterior" />
      <SlideShow>
        <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Exterior%2FQuincho30M-6.jpg?alt=media&token=66d53013-70c0-4d19-83a3-3fbe4565154c"/>
        <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Exterior%2FQuincho30M-5.jpg?alt=media&token=7b5d0df6-f805-4dad-b78f-238e396bbb45" />
        <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Exterior%2FQuincho30M-3.jpg?alt=media&token=d4c3136e-7465-4ca2-902a-9f28d1bd63ca" />
      </SlideShow>
      <InfoQuinchos
        title="Quincho 30M2"
        img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Exterior%2FQuincho30M-2.jpg?alt=media&token=8742f1ef-71a9-454e-bd8e-aad77e4c0a8e"
        ventanas="02"
      />
      <FooterSec />
    </div>
  );
}

