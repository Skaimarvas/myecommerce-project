import { toast } from "react-toastify";
import { axiosInstance } from "../../api/api";
import { FETCH_STATES } from "../actions/globalActions";
import {
  setProductFetchState,
  setBproductFetchState,
  setDetailState,
} from "../actions/productActions";

import {
  getProductFromApi,
  getTotalProductsCount,
  getBestsFromApi,
  getProductDetail,
} from "../actions/productActions";

export const getProduct = (param) => {
  return (dispatch, getState) => {
    dispatch(setProductFetchState(FETCH_STATES.fetching));
    axiosInstance
      .get(`products${param ? param : ""}`)
      .then((res) => {
        dispatch(getProductFromApi(res.data.products));
        dispatch(getTotalProductsCount(res.data.total));
        dispatch(setProductFetchState(FETCH_STATES.fetched));
      })
      .catch((err) => {
        toast.error(err.message);
        dispatch(setProductFetchState(FETCH_STATES.failed));
      });
  };
};

export const getBproduct = (param) => {
  console.log("PARAM", param);
  return (dispatch, getState) => {
    dispatch(setBproductFetchState(FETCH_STATES.fetching));
    axiosInstance
      .get(`products${param ? param : ""}`)
      .then((res) => {
        dispatch(getBestsFromApi(res.data.products));
        dispatch(setBproductFetchState(FETCH_STATES.fetched));
        console.log("PRODUCTS", res.data);
      })
      .catch((err) => {
        toast.error(err.message);
        dispatch(setBproductFetchState(FETCH_STATES.failed));
      });
  };
};

export const getDetail = (param) => {
  return (dispatch, getState) => {
    dispatch(setDetailState(FETCH_STATES.fetching));
    axiosInstance
      .get(`products${param ? param : ""}`)
      .then((res) => {
        dispatch(getProductDetail(res.data));
        dispatch(setDetailState(FETCH_STATES.fetched));
      })
      .catch((err) => {
        toast.error(err.message);
        dispatch(setDetailState(FETCH_STATES.failed));
      });
  };
};
