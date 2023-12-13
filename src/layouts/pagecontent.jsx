import React from "react";
import { Switch, Route } from "react-router-dom";
//Pages
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import Product from "../pages/Product";
import About from "../pages/About";

export default function PageContent() {
  return (
    <div>
      <Switch>
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
