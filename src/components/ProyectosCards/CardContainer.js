import React from "react";
import { Link } from 'react-router-dom'
import "./CardContainer.css";

const CardContainer = ({ title, beds, baths, img, link }) => {
    return (
          <div
            className="proy-card c1"
            style={{
              backgroundImage: `url(${img})`,
            }}
          >
            <div className="card-content">
              <h2 className="card-title">{title}</h2>
              <div className="desc-icons">
                <i className="fas fa-bed"></i>
                {beds}
                <i className="fas fa-bath"></i>
                {baths}
              </div>
              <Link to={link} className="button">
                Ver Mas
              </Link>
            </div>
          </div>
    );
}

export default CardContainer