import { toast } from "react-toastify";
import { axiosInstance } from "../../api/api";

export const FETCH_STATES = {
  notFetched: "NOT_FETCHED",
  fetching: "FETCHING",
  fetched: "FETCHED",
  failed: "FAILED",
};

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
