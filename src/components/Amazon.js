import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import serve from "../images/serve.jpg";
import amazon1 from "../images/amazon1.jpg";
import amazon2 from "../images/amazon2.jpg";
import amazon3 from "../images/amazon3.jpg";
import "../css/Amazon.css";

function Amazon() {
  const [showimg, setshowimg] = useState(1);

  useEffect(() => {
    myContent();
  }, [showimg]);

  const nextimg = () => {
    if (showimg === 3) {
      setshowimg(showimg - 3);
    } else {
      setshowimg(showimg + 1);
      console.log(showimg);
    }
  };
  const previmg = () => {
    if (showimg === -1) {
      setshowimg(showimg + 3);
    } else {
      setshowimg(showimg - 1);
      console.log(showimg);
    }
  };
  const myContent = () => {
    if (showimg === 1) {
      return <img className="serve" src={serve} alt="logo" />;
    } else if (showimg === 0) {
      return <img className="serve" src={amazon1} alt="amazon1" />;
    } else if (showimg === 2) {
      return <img className="serve" src={amazon2} alt="amazon2" />;
    } else {
      return <img className="serve" src={amazon3} alt="amazon2" />;
    }
  };

  return (
    <div className="container1">
      <Link to="/more">{myContent()}</Link>
      {/* <img className="serve" src={serve} alt="logo" /> */}
      <button class="button left" onClick={previmg}>
        &#10094;
      </button>
      <button class="button right" onClick={nextimg}>
        &#10095;
      </button>
    </div>
  );
}

export default Amazon;
