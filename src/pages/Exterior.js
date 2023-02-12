import React from 'react'
import ExteriorCardList from '../components/Exterior/ExteriorCardList'
import NavBarSec from '../components/NavBarSec/NavBarSec'
import FooterSec from '../components/FooterSec/FooterSec'
import Titulo from '../components/Titulo';

const Exterior = () => {
    return(
        <div className="">
            <NavBarSec title="Exterior" link="/proyectos"/>
            <Titulo titulo="Exterior"/>
            <ExteriorCardList/>
            <FooterSec/>
        </div>
    )
}

export default Exterior