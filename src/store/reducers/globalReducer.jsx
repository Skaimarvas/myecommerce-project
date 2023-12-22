import { toast } from "react-toastify";
import { GET_ROLES_FROM_API } from "../actions/globalActions";
import { GET_CATEGORIES_FROM_API } from "../actions/globalActions";

const initalState = {
  roles: [],
  categories: [],
  theme: "",
  language: "",
};

export const globalReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_ROLES_FROM_API:
      const roles = {
        ...state,
        roles: action.payload,
      };
      return roles;
    case GET_CATEGORIES_FROM_API:
      const categories = {
        ...state,
        categories: action.payload,
      };
      return categories;

    default:
      return state;
  }
};