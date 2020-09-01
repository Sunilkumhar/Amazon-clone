import React from "react";
import "../css/Addeditems.css";

function Addeditems({ src, title, Stock, price, id, cartitems, setCartitems }) {
  const removeitem = () => {
    setCartitems(cartitems.filter((el) => el.id !== id));
  };
  return (
    <div className="items">
      <img src={src} alt="product" />
      <div className="details">
        <h5>{title}</h5>
        <p>{Stock}</p>
        <div className="gift">
          <input type="checkbox" />
          <label htmlFor="checkout">
            {" "}
            <p>This is a gift</p>
          </label>
          <div className="learn">
            <p>Learn more</p>
          </div>
        </div>
        <div className="x">
          <button className="btn">Qty:1</button>
          <p>|</p>
          <div className="delete">
            <p onClick={removeitem}> Delete </p>
          </div>
          <p>|</p>
        </div>
      </div>
      <div className="rate">
        <h5>${price}</h5>
      </div>
    </div>
  );
}

export default Addeditems;
