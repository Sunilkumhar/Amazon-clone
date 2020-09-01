import React from "react";
import { Link } from "react-router-dom";
import Eachcard from "./Eachcard";
import Productdetails from "./Productdetails";
import "../css/Products.css";
import electronics from "../images/electronics.jpg";
import amazonbasics from "../images/amazonbasics.jpg";
import camera_small from "../images/camera_small.jpg";
import kettle from "../images/kettle.jpg";
import scissors from "../images/scissors.jpg";
import knife from "../images/knife.jpg";
import headphone from "../images/headphone.jpg";
import monitor from "../images/monitor.jpg";
import mouse from "../images/mouse.jpg";

function Products() {
  return (
    <React.Fragment>
      <div className="card1">
        <div className="variousoptions">
          <Eachcard src={camera_small} title="Acessories" />
          <Eachcard src={electronics} title="AmazonBasics" />
          <Eachcard src={amazonbasics} title="Electronics" />
          <div className="forbetter">
            <h4>Sign in for the best experience</h4>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <button className="btn btn-block" variant="contained">
                Sign in securely
              </button>
            </Link>
          </div>
        </div>

        <div className="products1">
          <Productdetails
            src={headphone}
            title="Logitech USB Headset H390 with Noise Cancelling Mic"
            owner="by Logitech"
            price="$25.16"
          />
          <Productdetails
            src={monitor}
            title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black"
            owner="by HP"
            price="$109.99"
          />
          <Productdetails
            src={mouse}
            title="VicTsing MM057 2.4G Wireless Mouse Portable Mobile Optical Mouse with USB Receiver, 5 Adjustable DPI Levels, 6 Buttons for Notebook, PC, Laptop, Computer, Macbook - Black"
            owner="by VicTsing"
            price="$11.59"
          />
        </div>
        <div className="products2">
          <Productdetails
            src={kettle}
            title="AmazonBasics Stainless Steel Portable Fast, Electric Hot Water Kettle for Tea and Coffee, 1 Liter, Silver"
            owner="by AmazonBasics"
            price="$21.99"
          />
          <Productdetails
            src={knife}
            title="AmazonBasics Premium 18-Piece Kitchen Knife Block Set"
            owner="by AmazonBasics"
            price="$69.70"
          />
          <Productdetails
            src={scissors}
            title="AmazonBasics Multipurpose, Comfort Grip, Titanium Fused, Stainless Steel Office Scissors - Pack of 3"
            owner="by AmazonBasics"
            price="$9.99"
          />
        </div>
      </div>
      <Link to="/more" style={{ textDecoration: "none" }}>
        <div className="morepdts">
          <button className="btn btn-block">See More</button>
        </div>
      </Link>
    </React.Fragment>
  );
}

export default Products;
