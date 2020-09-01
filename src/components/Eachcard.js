import React from "react";
import { Link } from "react-router-dom";

import "../css/Eachcard.css";

function Card({ src, title }) {
  return (
    <div className="card12">
      <h4>{title}</h4>
      <Link to="/more">
        <img src={src} alt={title} />
        <div className="link">
          <p>Shop now</p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
