import React from "react";
import {Link} from 'wouter';
require("./style.css");

const SliderItem = ({ movie, width }) => {
  return (
    <div className="slider-item" style={{ width: `${width}%` }}>
      <Link  to={`/filme/info/${movie.stream_id}`}>
      <img
        className="slider-image"
        src={`${movie.stream_icon}`}
        alt={movie.name}
      />
      </Link>
    </div>
  );
};

export default SliderItem;
