import React from 'react';
import ProyectoCardList from '../components/ProyectosCards/ProyectoCardList';
import NavBarSec from '../components/NavBarSec/NavBarSec'
import FooterSec from '../components/FooterSec/FooterSec';
import Titulo from "../components/Titulo";

const Proyectos = () => {
    return (
        <div className="">
            <NavBarSec title="Proyectos" link="/proyectos"/>
            <Titulo titulo="Proyectos" />
            <ProyectoCardList/>
            <FooterSec/>
        </div>
    )
}

export default Proyectos