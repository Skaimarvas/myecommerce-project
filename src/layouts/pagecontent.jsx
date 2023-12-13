import React from "react";
import { Switch, Route } from "react-router-dom";
//Pages
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import Product from "../pages/Product";

export default function PageContent() {
  return (
    <div>
      <Switch>
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
