import React from "react";
import "../css/Cart.css";
import Addeditems from "./Addeditems";
import kettle from "../images/kettle.jpg";

function Cart() {
  return (
    <React.Fragment>
      <div className="cart">
        <div className="cartleftside">
          <div className="heading">
            <h4>Shopping Cart</h4>
            <p>Price</p>
          </div>
          <Addeditems
            src={kettle}
            title="AmazonBasics Stainless Steel Portable Fast, Electric Hot Water Kettle for Tea and Coffee, 1 Liter, Silver"
            owner="by AmazonBasics"
            Stock="In Stock"
            price="$21.99"
          />
          <Addeditems
            src={kettle}
            title="AmazonBasics Stainless Steel Portable Fast, Electric Hot Water Kettle for Tea and Coffee, 1 Liter, Silver"
            owner="by AmazonBasics"
            Stock="In Stock"
            price="$21.99"
          />
          <Addeditems
            src={kettle}
            title="AmazonBasics Stainless Steel Portable Fast, Electric Hot Water Kettle for Tea and Coffee, 1 Liter, Silver"
            owner="by AmazonBasics"
            Stock="In Stock"
            price="$21.99"
          />
          <Addeditems
            src={kettle}
            title="AmazonBasics Stainless Steel Portable Fast, Electric Hot Water Kettle for Tea and Coffee, 1 Liter, Silver"
            owner="by AmazonBasics"
            Stock="In Stock"
            price="$21.99"
          />
          <Addeditems
            src={kettle}
            title="AmazonBasics Stainless Steel Portable Fast, Electric Hot Water Kettle for Tea and Coffee, 1 Liter, Silver"
            owner="by AmazonBasics"
            Stock="In Stock"
            price="$21.99"
          />
          <Addeditems
            src={kettle}
            title="AmazonBasics Stainless Steel Portable Fast, Electric Hot Water Kettle for Tea and Coffee, 1 Liter, Silver"
            owner="by AmazonBasics"
            Stock="In Stock"
            price="$21.99"
          />
          <Addeditems
            src={kettle}
            title="AmazonBasics Stainless Steel Portable Fast, Electric Hot Water Kettle for Tea and Coffee, 1 Liter, Silver"
            owner="by AmazonBasics"
            Stock="In Stock"
            price="$21.99"
          />
          <div className="subtotal">
            <h5>Subtotal (9 items)</h5>
            <h5>
              <strong>: $172.30</strong>
            </h5>
          </div>
        </div>
        <div className="cartrightside">
          <p>Subtotal (2 items): $33.16</p>
          <input type="checkbox" />
          <label for="checkout"> This order contains a gift</label>
          <button className="btn btn-block">Proceed to checkout</button>
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

export default Cart;
