import React, { Component } from 'react'
import FooterSec from '../components/FooterSec/FooterSec';
import FranquiciasComp from '../components/FranquiciasComp/FranquiciasComp';
import NavBarSec from "../components/NavBarSec/NavBarSec";

export default class Franquicias extends Component {
    render() {
        return (
            <div>
                
            <NavBarSec title="Franquicias" link="/franquicias"/>
            <FranquiciasComp/>
            <FooterSec/>

            </div>
        )
    }
}
