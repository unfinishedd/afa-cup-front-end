import { useState } from "react";
import { useHistory } from "react-router-dom";
import img1 from "../local_images/plattegrond.png";

const Map = () => {
  return (
    <div className="map">
      <h4>Map</h4>
      <hr /><br /> 
      <img
        src={img1}
        className="img-fluid"
        alt="logo"
        style={{ maxWidth: "23rem" }}
      ></img>
    </div>
  );
};

export default Map;
