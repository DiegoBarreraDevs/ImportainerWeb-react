import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./AspectosCard.css";

export default class AspectosCard extends Component {
  render() {
    const { title, description, img } = this.props;
    return (
      <div className="card-aspectos">
        <div className="card-content-aspectos">
          <img src={img} alt="" className="card-img-aspectos" loading="lazy" />

          <div className="card-text-aspectos">
            <h4 className="card-title-aspectos">{title}</h4>
            <p>{description}</p>
          </div>
          {/* <Link class="btn-aspectos" to={link}>Ver Mas</Link> */}
        </div>
      </div>
    );
  }
}
