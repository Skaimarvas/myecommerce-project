import {
  GET_PRODUCT_FROM_API,
  GET_TOTAL_PRODUCTS_COUNT,
} from "../actions/productActions";
import { FETCH_STATES } from "../actions/globalActions";
import { SET_PRODUCT_FETCH_STATE } from "../actions/productActions";

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
      const renewProduct = action.payload.filter(
        (pro) => !state.productlist.some((som) => pro.id === som.id)
      );
      const products = {
        ...state,
        productlist: [...state.productlist, ...renewProduct],
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
