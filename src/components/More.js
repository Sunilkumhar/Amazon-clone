import React from "react";
import "../css/More.css";
import Productdetails from "./Productdetails";
import morepage from "../images/morepage.jpg";
import kettle from "../images/kettle.jpg";
import scissors from "../images/scissors.jpg";
import knife from "../images/knife.jpg";
import headphone from "../images/headphone.jpg";
import monitor from "../images/monitor.jpg";
import mouse from "../images/mouse.jpg";

function More({ cartitems, setCartitems }) {
  return (
    <React.Fragment>
      <div className="more1">
        <div className="more1pdts">
          <div className="morepageimg">
            <img src={morepage} alt="morepage" />
          </div>
          <div className="morepageproducts">
            <Productdetails
              src={kettle}
              title="AmazonBasics Stainless Steel Portable Fast, Electric Hot Water Kettle for Tea and Coffee, 1 Liter, Silver"
              owner="by AmazonBasics"
              price={21.99}
              cartitems={cartitems}
              setCartitems={setCartitems}
            />
            <Productdetails
              src={knife}
              title="AmazonBasics Premium 18-Piece Kitchen Knife Block Set"
              owner="by AmazonBasics"
              price={69.7}
              cartitems={cartitems}
              setCartitems={setCartitems}
            />
            <Productdetails
              src={scissors}
              title="AmazonBasics Multipurpose, Comfort Grip, Titanium Fused, Stainless Steel Office Scissors - Pack of 3"
              owner="by AmazonBasics"
              price={9.99}
              cartitems={cartitems}
              setCartitems={setCartitems}
            />
          </div>
          <div className="morepageproducts">
            <Productdetails
              src={headphone}
              title="Logitech USB Headset H390 with Noise Cancelling Mic"
              owner="by Logitech"
              price={25.16}
              cartitems={cartitems}
              setCartitems={setCartitems}
            />
            <Productdetails
              src={monitor}
              title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black"
              owner="by HP"
              price={109.99}
              cartitems={cartitems}
              setCartitems={setCartitems}
            />
            <Productdetails
              src={mouse}
              title="VicTsing MM057 2.4G Wireless Mouse Portable Mobile Optical Mouse with USB Receiver, 5 Adjustable DPI Levels, 6 Buttons for Notebook, PC, Laptop, Computer, Macbook - Black"
              owner="by VicTsing"
              price={11.59}
              cartitems={cartitems}
              setCartitems={setCartitems}
            />
          </div>
          <div className="morepageproducts">
            <Productdetails
              src={knife}
              title="AmazonBasics Premium 18-Piece Kitchen Knife Block Set"
              owner="by AmazonBasics"
              price={69.7}
              cartitems={cartitems}
              setCartitems={setCartitems}
            />
            <Productdetails
              src={headphone}
              title="Logitech USB Headset H390 with Noise Cancelling Mic"
              owner="by Logitech"
              price={25.16}
              cartitems={cartitems}
              setCartitems={setCartitems}
            />
            <Productdetails
              src={kettle}
              title="AmazonBasics Stainless Steel Portable Fast, Electric Hot Water Kettle for Tea and Coffee, 1 Liter, Silver"
              owner="by AmazonBasics"
              price={21.99}
              cartitems={cartitems}
              setCartitems={setCartitems}
            />
          </div>
          <div className="morepageproducts">
            <Productdetails
              src={mouse}
              title="VicTsing MM057 2.4G Wireless Mouse Portable Mobile Optical Mouse with USB Receiver, 5 Adjustable DPI Levels, 6 Buttons for Notebook, PC, Laptop, Computer, Macbook - Black"
              owner="by VicTsing"
              price={11.59}
              cartitems={cartitems}
              setCartitems={setCartitems}
            />
            <Productdetails
              src={knife}
              title="AmazonBasics Premium 18-Piece Kitchen Knife Block Set"
              owner="by AmazonBasics"
              price={69.7}
              cartitems={cartitems}
              setCartitems={setCartitems}
            />
            <Productdetails
              src={knife}
              title="AmazonBasics Premium 18-Piece Kitchen Knife Block Set"
              owner="by AmazonBasics"
              price={69.7}
              cartitems={cartitems}
              setCartitems={setCartitems}
            />
          </div>
        </div>
      </div>
      <div className="footer1">
        <div className="conditions">
          <p>Conditions of Use</p>
          <p>Privacy Notice</p>
          <p>Help</p>
        </div>
        <p>© 2020 Amazon clone! No rights reserved - this is a demo!</p>
      </div>
    </React.Fragment>
  );
}

export default More;
