import { getRolesFromApi } from "../actions/globalActions";
import { getCategoriesFromApi } from "../actions/globalActions";
import { axiosInstance } from "../../api/api";

export const getRoles = () => {
  return (dispatch, getState) => {
    axiosInstance
      .get("/roles")
      .then((res) => dispatch(getRolesFromApi(res.data)))
      .catch((err) => toast.error(err.message));
  };
};

export const getCategories = () => {
  return (dispatch, getState) => {
    axiosInstance
      .get("/categories")
      .then((res) => dispatch(getCategoriesFromApi(res.data)))
      .catch((err) => toast.error(err.message));
  };
};
