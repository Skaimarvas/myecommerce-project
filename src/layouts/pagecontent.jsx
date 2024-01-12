import React from "react";
import { Switch, Route } from "react-router-dom";
//Pages
import Home from "../pages/home";
import ProductList from "../pages/productlist";
import Product from "../pages/product";
import About from "../pages/about";
import Team from "../pages/team";
import Contact from "../pages/contact";
import ProductSlider from "../components/productslider";
import SignUp from "../pages/signUp";
import Login from "../pages/login";
import NotFoundPage from "../pages/notfoundpage";
import ShoppingCartPage from "../pages/shoppingcartpage";

export default function PageContent() {
  return (
    <div>
      <Switch>
        <Route path="/cart" exact>
          <ShoppingCartPage />
        </Route>
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
        <Route path="/shopping/:cat/:id/:name" exact>
          <Product />
        </Route>
        <Route path="/shopping" exact>
          <ProductList />
        </Route>
        <Route path="/shopping/:gen/:cat" exact>
          <ProductList />
        </Route>

        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}
