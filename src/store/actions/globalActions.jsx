import { toast } from "react-toastify";
import { axiosInstance } from "../../api/api";

export const GET_ROLES_FROM_API = "GET_ROLES_FROM_API";
export const GET_CATEGORIES_FROM_API = "GET_CATEGORIES_FROM_API";

export const getRolesFromApi = (roles) => {
  return {
    type: GET_ROLES_FROM_API,
    payload: roles,
  };
};

export const getCategoriesFromApi = (categories) => {
  return {
    type: GET_CATEGORIES_FROM_API,
    payload: categories,
  };
};

//thunks
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
