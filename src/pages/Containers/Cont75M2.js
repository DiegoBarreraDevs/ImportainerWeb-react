import React from "react";
import InfoContainer from "../../components/InfoContainers/InfoContainer";
import FooterSec from "../../components/FooterSec/FooterSec";
import NavBarSec from "../../components/NavBarSec/NavBarSec";
import Slide from "../../components/SlideShow/Slide";
import SlideShow from "./../../components/SlideShow/SlideShow";

export default function Cont75M2() {
  return (
    <div>
      <NavBarSec title="Casas" link="/casas" />
      <SlideShow>
        <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Casas%2FCasa75M-1.jpg?alt=media&token=28d4667b-c167-4b3d-b61c-a059ba231346" />
        <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Casas%2FCasa75M-3.jpg?alt=media&token=a62ac0da-aa9d-4a37-8ffe-61ef26135b72" />
        <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Casas%2FCasa75M-2.jpg?alt=media&token=6b791d58-d7fd-4e87-af80-08767c934b39" />
      </SlideShow>
      <InfoContainer
        title="Container 75M2"
        img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Planos%2F75m2.jpg?alt=media&token=33b7c3ff-6ed1-4664-b366-99689c49aa4b"
        aires="03"
        ventanas="07"
        litros="65"
      />
      <FooterSec />
    </div>
  );
}
