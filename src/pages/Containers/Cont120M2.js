import React from 'react'
import InfoContainer from '../../components/InfoContainers/InfoContainer'
import FooterSec from '../../components/FooterSec/FooterSec'
import NavBarSec from '../../components/NavBarSec/NavBarSec'
import Slide from '../../components/SlideShow/Slide';
import SlideShow from "./../../components/SlideShow/SlideShow";

export default function Cont120M2() {
    return (
        <div>
            <NavBarSec title="Casas" link="/casas"/>
            <SlideShow>
                <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Casas%2FCasa120M-3.jpg?alt=media&token=ac270369-b2c7-439f-995d-e88883789c89"/>
                <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Casas%2FCasa120M-5.jpg?alt=media&token=efbf95d2-9f55-407a-b138-d3e5186b8a09"/>
                <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Casas%2FCasa120M-2.jpg?alt=media&token=e909d3d9-5d13-435f-b461-8fb8b5868b29" />
                <Slide img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Casas%2FCasa120M-4.jpg?alt=media&token=1c3aaa6a-bf19-4524-a1e8-0dd80fd5ad5d"/>
            </SlideShow>
            <InfoContainer
                title="Container 120M2"
                img="https://firebasestorage.googleapis.com/v0/b/base-datos-importaner.appspot.com/o/Planos%2F120%20m2%2001.jpg?alt=media&token=a3c043c4-d758-4c94-8aea-df368d98370f" 
                aires="03"
                ventanas="12"
                litros="130"
            />
            <FooterSec/>
        </div>
    )
}

