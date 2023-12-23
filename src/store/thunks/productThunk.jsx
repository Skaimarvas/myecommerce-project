import { toast } from "react-toastify";
import { axiosInstance } from "../../api/api";
import { FETCH_STATES } from "../actions/globalActions";
import { setProductFetchState } from "../actions/productActions";

import {
  getProductFromApi,
  getTotalProductsCount,
} from "../actions/productActions";

export const getProduct = () => {
  return (dispatch, getState) => {
    dispatch(setProductFetchState(FETCH_STATES.fetching));
    axiosInstance
      .get("/products")
      .then((res) => {
        dispatch(getProductFromApi(res.data.products));
        dispatch(getTotalProductsCount(res.data.total));
        dispatch(setProductFetchState(FETCH_STATES.fetched));
        console.log("PRODUCTS", res.data);
      })
      .catch((err) => {
        toast.error(err.message);
        dispatch(setProductFetchState(FETCH_STATES.failed));
      });
  };
};
