export const GET_PRODUCT_FROM_API = "GET_PRODUCT_FROM_API";
export const GET_TOTAL_PRODUCTS_COUNT = "GET_TOTAL_PRODUCTS_COUNT";
export const SET_PRODUCT_FETCH_STATE = "SET_PRODUCT_FETCH_STATE";

export const getProductFromApi = (product) => {
  return {
    type: GET_PRODUCT_FROM_API,
    payload: product,
  };
};

export const getTotalProductsCount = (counts) => {
  return {
    type: GET_TOTAL_PRODUCTS_COUNT,
    payload: counts,
  };
};

export const setProductFetchState = (fetchstate) => {
  return {
    type: SET_PRODUCT_FETCH_STATE,
    payload: fetchstate,
  };
};
