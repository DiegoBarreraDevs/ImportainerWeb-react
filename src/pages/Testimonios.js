import React, { Component } from 'react'
import FooterSec from '../components/FooterSec/FooterSec'
import NavBarSec from '../components/NavBarSec/NavBarSec'
import TestimoniosList from '../components/Testimonios/TestimoniosList'
import Titulo from './../components/Titulo'

export default class Testimonios extends Component {
    render() {
        return (
            <div>
                <NavBarSec title="Testimonios" link="/testimonios"/>
                <Titulo titulo="Testimonios" />
                <TestimoniosList/>
                <FooterSec/>
            </div>
        )
    }
}
