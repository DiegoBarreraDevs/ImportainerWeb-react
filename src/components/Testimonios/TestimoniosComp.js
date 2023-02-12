import React, { Component } from 'react'
import './TestimoniosComp.css'

export default class TestimoniosComp extends Component {
    render() {
        const { title, description, img } = this.props;
        return (
            <div className="CardTestimonio">
                <img src={img} alt="" />
                <div className="TextTestimonio">
                    <h2 className="TitleTestimonios">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}
