import {
  FETCH_STATES,
  getRolesFromApi,
  setCategoriesFetchState,
} from "../actions/globalActions";
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
    dispatch(setCategoriesFetchState(FETCH_STATES.fetching));
    axiosInstance
      .get("/categories")
      .then((res) => {
        dispatch(setCategoriesFetchState(FETCH_STATES.fetched));
        dispatch(getCategoriesFromApi(res.data));
      })
      .catch((err) => {
        dispatch(setCategoriesFetchState(FETCH_STATES.failed));
        toast.error(err.message);
      });
  };
};
