import {
  GET_BESTS_FROM_API,
  GET_PRODUCT_FROM_API,
  GET_TOTAL_PRODUCTS_COUNT,
  GET_PRODUCT_DETAIL,
  SET_DETAIL_STATE,
} from "../actions/productActions";
import { FETCH_STATES } from "../actions/globalActions";
import {
  SET_PRODUCT_FETCH_STATE,
  SET_BESTS_FETCH_STATE,
  SET_PRODUCT_EMPTY,
} from "../actions/productActions";

const initalState = {
  productlist: [],
  bproductlist: [],
  pdetail: "",
  productcount: "",
  pagecount: "",
  activepage: "",
  detailstate: FETCH_STATES.notFetched,
  bfetchstate: FETCH_STATES.notFetched,
  fetchstate: FETCH_STATES.notFetched,
};

export const productReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_PRODUCT_FROM_API:
      // const renewProduct = action.payload.filter(
      //   (pro) => !state.productlist.some((som) => pro.id === som.id)
      // );
      const products = {
        ...state,
        productlist: [...state.productlist, ...action.payload],
      };
      return products;
    case GET_BESTS_FROM_API:
      const bestproduct = {
        ...state,
        bproductlist: action.payload,
      };
      return bestproduct;
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
    case SET_BESTS_FETCH_STATE:
      const bfetch = {
        ...state,
        bfetchstate: action.payload,
      };
      return bfetch;
    case SET_PRODUCT_EMPTY:
      const empty = {
        ...state,
        productlist: [],
      };
      return empty;
    case GET_PRODUCT_DETAIL:
      const detail = {
        ...state,
        pdetail: { ...action.payload },
      };
      return detail;
    case SET_DETAIL_STATE:
      const fetchdetail = {
        ...state,
        detailstate: action.payload,
      };
      return fetchdetail;
    default:
      return state;
  }
};
