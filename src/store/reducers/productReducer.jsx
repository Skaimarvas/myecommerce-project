import { GET_PRODUCT_FROM_API } from "../actions/productActions";
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
    default:
      return state;
  }
};
