import React, { Component } from "react";
import "./SlideShow.css"

export default class Slide extends Component {
  render() {
    const { img } = this.props;
    return (
      <div className="Slide">
        <img src={img} alt="" />
      </div>
    );
  }
}
