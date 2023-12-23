import { toast } from "react-toastify";

export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";

export const addProductToCart = (product) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: product,
  };
};
