import React from "react";
import { Link } from "react-router-dom";
import "../css/Cart.css";
import Addeditems from "./Addeditems";
import emptycart from "../images/emptycart.svg";

function Cart({ cartitems, setCartitems }) {
  let totalcost = 0;
  cartitems.map((x) => (totalcost = totalcost + x.price));

  return (
    <React.Fragment>
      <div className="cart">
        {cartitems.length > 0 ? (
          <div className="cartleftside">
            <div className="heading">
              <h4>Shopping Cart</h4>
              <p>Price</p>
            </div>
            {cartitems.map((x) => (
              <Addeditems
                src={x.src}
                title={x.title}
                owner={x.owner}
                Stock="In Stock"
                price={x.price}
                id={x.id}
                cartitems={cartitems}
                setCartitems={setCartitems}
              />
            ))}

            <div className="subtotal">
              <h5>Subtotal ({cartitems.length} items)</h5>
              <h5>
                <strong>: ${totalcost.toFixed(2)}</strong>
              </h5>
            </div>
          </div>
        ) : (
          <div className="nothing">
            <img src={emptycart} alt="emptycart" />
            <div className="signbuton">
              <h2>You have nothing in your cart.Please add items</h2>
              <div className="buttons">
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <button className="btn">Sign in to your account</button>
                </Link>

                <Link to="/more" style={{ textDecoration: "none" }}>
                  <button className="btn shop">Shop now</button>
                </Link>
              </div>
            </div>
          </div>
        )}
        {cartitems.length > 0 ? (
          <div className="cartrightside">
            <p>
              Subtotal ({cartitems.length} items): ${totalcost.toFixed(2)}
            </p>
            <input type="checkbox" />
            <label htmlFor="checkout"> This order contains a gift</label>
            <button className="btn btn-block">Proceed to checkout</button>
          </div>
        ) : null}
      </div>
      {cartitems.length > 0 ? (
        <div className="footer1">
          <div className="conditions">
            <p>Conditions of Use</p>
            <p>Privacy Notice</p>
            <p>Help</p>
          </div>
          <p>© 2020 Amazon clone! No rights reserved - this is a demo!</p>
        </div>
      ) : null}
    </React.Fragment>
  );
}

export default Cart;
