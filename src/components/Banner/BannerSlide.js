import React, { Component } from "react";
import "./BannerSlide.css";

export default class BannerSlide extends Component {
  render() {
    const { img } = this.props;
    return (
      <div className="BannerSlide">
        <img src={img} alt="" />
      </div>
    );
  }
}
