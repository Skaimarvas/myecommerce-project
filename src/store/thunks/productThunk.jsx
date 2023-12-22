import { toast } from "react-toastify";
import { axiosInstance } from "../../api/api";

import {
  getProductFromApi,
  getTotalProductsCount,
} from "../actions/productActions";

export const getProduct = () => {
  return (dispatch, getState) => {
    axiosInstance
      .get("/products")
      .then((res) => {
        dispatch(getProductFromApi(res.data.products));
        dispatch(getTotalProductsCount(res.data.total));
        console.log("PRODUCTS", res.data);
      })
      .catch((err) => toast.error(err.message));
  };
};
