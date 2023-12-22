import { toast } from "react-toastify";
import { axiosInstance } from "../../api/api";

import { getProductFromApi } from "../actions/productActions";

export const getProduct = () => {
  return (dispatch, getState) => {
    axiosInstance
      .get("?")
      .then((res) => dispatch(getProductFromApi(res.data)))
      .catch((err) => toast.error(err.message));
  };
};
