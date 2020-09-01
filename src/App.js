import React, { useState } from "react";
import Nav from "./components/Nav";
import Amazon from "./components/Amazon";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Cart from "./components/Cart";
import More from "./components/More";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [cartitems, setCartitems] = useState([]);
  return (
    <div className="home1">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cart">
            <Nav cartitems={cartitems} />
            <Cart cartitems={cartitems} setCartitems={setCartitems} />
          </Route>
          <Route path="/more">
            <Nav cartitems={cartitems} />
            <More cartitems={cartitems} setCartitems={setCartitems} />
          </Route>
          <Route path="/">
            <div className="home">
              <Nav cartitems={cartitems} />
              <Amazon />
              <Products cartitems={cartitems} setCartitems={setCartitems} />
              <Footer />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
