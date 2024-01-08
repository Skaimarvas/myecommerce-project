import { toast } from "react-toastify";

export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const DECREASE_PRODUCT_FROM_CART = "DECREASE_PRODUCT_FROM_CART";
export const INCREASE_PRODUCT_FROM_CART = "INCREASE_PRODUCT_FROM_CART";
export const DELETE_PRODUCT_FROM_CART = "DELETE_PRODUCT_FROM_CART";

export const addProductToCart = (product) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: product,
  };
};

export const decreaseProduct = (id) => {
  return {
    type: DECREASE_PRODUCT_FROM_CART,
    payload: id,
  };
};

export const increaseProduct = (id) => {
  return {
    type: INCREASE_PRODUCT_FROM_CART,
    payload: id,
  };
};

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT_FROM_CART,
    payload: id,
  };
};
