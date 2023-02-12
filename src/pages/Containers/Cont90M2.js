import React from "react";
import InfoContainer from "../../components/InfoContainers/InfoContainer";
import FooterSec from "../../components/FooterSec/FooterSec";
import NavBarSec from "../../components/NavBarSec/NavBarSec";
import Slide from "../../components/SlideShow/Slide";
import SlideShow from "./../../components/SlideShow/SlideShow";

export default function Cont90M2() {
  return (
    <div>
      <NavBarSec title="Casas" link="/casas" />
      <SlideShow>
        <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Casas%2FCasa90M-9.jpg?alt=media&token=cf21a1e8-4e60-4481-b1c7-e90e06500c49" />
        <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Casas%2FCasa90M-7.jpg?alt=media&token=0ec1e628-b57d-44df-85f1-b19f0d8855c4"  />
        <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Casas%2FCasa90M-6.jpg?alt=media&token=50a552dc-1e19-4028-93d9-5d00e8edd1d8"  />
      </SlideShow>
      <InfoContainer
        title="Container 90M2"
        img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Planos%2F90%20M2.jpg?alt=media&token=a8281186-8e50-4941-ae4e-00d60eb93f78" 
        aires="03"
        ventanas="09"
        litros="65"
      />
      <FooterSec />
    </div>
  );
}


