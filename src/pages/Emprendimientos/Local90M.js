import React from "react";
import InfoLocal from "../../components/InfoContainers/InfoLocal";
import FooterSec from "../../components/FooterSec/FooterSec";
import NavBarSec from "../../components/NavBarSec/NavBarSec";
import SlideShow from "../../components/SlideShow/SlideShow";
import Slide from "../../components/SlideShow/Slide";

export default function Local90M2() {
  return (
    <div>
      <NavBarSec title="Emprendimientos" link="/emprendimientos" />
      <SlideShow>
        <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Locales%2FLocal90M-5.jpg?alt=media&token=b3f82ef2-9183-43da-9ed0-6ced53de50ad"/>
        <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Locales%2FLocal90M-4.jpg?alt=media&token=d8bbd2dc-3de8-48a1-b17c-584510e3ebb4"/>
        <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Locales%2FLocal90M-6.jpg?alt=media&token=18d93fab-e57d-4b07-b880-c8860768af91" />
      </SlideShow>
      <InfoLocal
        title="Local 90M2"
        img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Locales%2FLocal90M-2.jpg?alt=media&token=2d9df531-f568-47db-8bc8-a8683fe83fee"
        aires="03"
        ventanas="12"
      />
      <FooterSec />
    </div>
  );
}

