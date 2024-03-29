import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
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
import NotFoundPage from "../pages/NotFoundPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import PrivateRoute from "./PrivateRoute";
import PaymentOptions from "../components/PaymentOptions";
import OrdersPage from "../pages/OrdersPage";
import LoadingScreen from "../components/LoadingScreen";

export default function PageContent() {
  return (
    <div>
      <Switch>
        <PrivateRoute path="/payment" component={() => <PaymentOptions />} />
        <Route path="/loading" exact>
          <LoadingScreen />
        </Route>
        <Route path="/orders" exact>
          <OrdersPage />
        </Route>
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
