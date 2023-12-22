import {
  GET_PRODUCT_FROM_API,
  GET_TOTAL_PRODUCTS_COUNT,
  SET_PRODUCT_FETCH_STATE,
} from "../actions/productActions";
import { FETCH_STATES } from "../actions/productActions";

const initalState = {
  productlist: [],
  productcount: "",
  pagecount: "",
  activepage: "",
  fetchstate: FETCH_STATES.notFetched,
};

export const productReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_PRODUCT_FROM_API:
      const products = {
        ...state,
        productlist: [...state.productlist, action.payload],
      };
      return products;
    case GET_TOTAL_PRODUCTS_COUNT:
      const total = {
        ...state,
        productcount: action.payload,
      };
      return total;
    case SET_PRODUCT_FETCH_STATE:
      const fetch = {
        ...state,
        fetchstate: action.payload,
      };
      return fetch;
    default:
      return state;
  }
};
