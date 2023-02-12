import React from "react";
import InfoBares from "../../components/InfoContainers/InfoBares";
import FooterSec from "../../components/FooterSec/FooterSec";
import NavBarSec from "../../components/NavBarSec/NavBarSec";
import SlideShow from "../../components/SlideShow/SlideShow";
import Slide from "../../components/SlideShow/Slide";

export default function Foodtrack120M2() {
  return (
    <div>
      <NavBarSec title="Emprendimientos" link="/emprendimientos" />
      <SlideShow>
        <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Foodtrack%2FFoodtrack120M-1.jpg?alt=media&token=ce49d647-d313-4262-a250-3dd60e2431a7" />
        <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Foodtrack%2FFoodtrack120M-2.jpg?alt=media&token=92a4f3b1-f36b-4bdb-8870-e559da650584" />
        <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Foodtrack%2FFoodtrack120M-3.jpg?alt=media&token=328a5aab-a991-45b9-98b6-66ddf03404a4"/>
      </SlideShow>
      <InfoBares
        title="Foodtruck 120M2"
        img="https://live.staticflickr.com/65535/51687166059_b88b2be763_z.jpg"
        baños="toilette damas y caballeros"
        medidas="1.60 x 0.50 hasta 3.00 x 0.50m"
        vanitory="01 "
        lavamanos="02 "
        inodoro ="02 "
        extra="- 01 Mingitorio (Baño hombres)"
        mesones="04"
      />
      <FooterSec />
    </div>
  );
}
