export const GET_PRODUCT_FROM_API = "GET_PRODUCT_FROM_API";
export const GET_TOTAL_PRODUCTS_COUNT = "GET_TOTAL_PRODUCTS_COUNT";
export const GET_BESTS_FROM_API = "GET_BESTS_FROM_API";
export const SET_PRODUCT_FETCH_STATE = "SET_PRODUCT_FETCH_STATE";
export const SET_BESTS_FETCH_STATE = "SET_BESTS_FETCH_STATE";
export const SET_PRODUCT_EMPTY = "SET_PRODUCT_EMPTY";

export const getProductFromApi = (product) => {
  return {
    type: GET_PRODUCT_FROM_API,
    payload: product,
  };
};

export const getBestsFromApi = (bests) => {
  return {
    type: GET_BESTS_FROM_API,
    payload: bests,
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

export const setBproductFetchState = (fetchstate) => {
  return {
    type: SET_BESTS_FETCH_STATE,
    payload: fetchstate,
  };
};

export const setProductEmpty = () => {
  return {
    type: SET_PRODUCT_EMPTY,
  };
};
