import React from 'react'
import EmprendimientosList from '../components/Emprendimientos/EmprendimientosList'
import NavBarSec from '../components/NavBarSec/NavBarSec'
import FooterSec from '../components/FooterSec/FooterSec'
import Titulo from '../components/Titulo'

const Emprendimientos = () => {
    return(
        <div className="">
            <NavBarSec title="Emprendimientos" link="/proyectos"/>
            <Titulo titulo="Emprendimientos"/>
            <EmprendimientosList/>
            <FooterSec/>
        </div>
    )
}

export default Emprendimientos