import React from 'react'
import OficinasCardList from '../components/Oficinas/OficinasCardList'
import NavBarSec from '../components/NavBarSec/NavBarSec'
import FooterSec from '../components/FooterSec/FooterSec'
import Titulo from '../components/Titulo'

const Oficinas = () => {
    return(
        <div className="">
            <NavBarSec title="Oficinas" link="/proyectos"/>
            <Titulo titulo="Oficinas"/>
            <OficinasCardList/>
            <FooterSec/>
        </div>
    )
}

export default Oficinas