import React from "react";
import "../css/Productdetails.css";

function Productdetails({ src, title, owner, price, cartitems, setCartitems }) {
  const additemtocart = (e) => {
    e.preventDefault();
    setCartitems([
      ...cartitems,
      {
        src,
        title,
        owner,
        price,
        id: Math.random(),
      },
    ]);
    console.log(cartitems.length);
  };
  return (
    <div className="pdts">
      <img src={src} alt="xyz" />
      <div className="title">
        <p>{title}</p>
      </div>
      <p className="owner">{owner}</p>
      <p className="ships">Ships to India</p>
      <div className="cart">
        <p className="price">${price}</p>
        <button onClick={additemtocart} className="btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Productdetails;
