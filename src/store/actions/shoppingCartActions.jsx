import { toast } from "react-toastify";

export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const DECREASE_PRODUCT_FROM_CART = "DECREASE_PRODUCT_FROM_CART";
export const INCREASE_PRODUCT_FROM_CART = "INCREASE_PRODUCT_FROM_CART";
export const DELETE_PRODUCT_FROM_CART = "DELETE_PRODUCT_FROM_CART";
export const CHECKED_PRODUCT = "CHECKED_PRODUCT";
export const POST_ORDERS = "POST_ORDERS";
export const GET_ORDERS = "GET_ORDERS";
export const GET_ADDRESS = "GET_ADDRESS";
export const POST_ADDRESS = "POST_ADDRESS";
export const GET_PAYMENT = "GET_PAYMENT";
export const POST_PAYMENT = "POST_PAYMENT";

export const getAddressData = (adress) => {
  return {
    type: GET_ADDRESS,
    payload: adress,
  };
};
export const postAddressData = (adress) => {
  return {
    type: POST_ADDRESS,
    payload: adress,
  };
};
export const getPaymentData = (payment) => {
  return {
    type: GET_PAYMENT,
    payload: payment,
  };
};
export const postPaymentData = (payment) => {
  return {
    type: POST_PAYMENT,
    payload: payment,
  };
};
export const postOrdersData = (orders) => {
  return {
    type: POST_ORDERS,
    payload: orders,
  };
};
export const getOrdersData = (orders) => {
  return {
    type: GET_ORDERS,
    payload: orders,
  };
};
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
export const checkedProduct = (id) => {
  return {
    type: CHECKED_PRODUCT,
    payload: id,
  };
};
