import React from "react";
import { Switch, Route } from "react-router-dom";
//Pages
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import Product from "../pages/Product";
import About from "../pages/About";
import Team from "../pages/Team";
import Contact from "../pages/Contact";
import ProductSlider from "../components/ProductSlider";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

export default function PageContent() {
  return (
    <div>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/productslider" exact>
          <ProductSlider />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/team" exact>
          <Team />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/product" exact>
          <Product />
        </Route>
        <Route path="/productlist" exact>
          <ProductList />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
