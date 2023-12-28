import {
  FETCH_STATES,
  GET_ROLES_FROM_API,
  SET_CATEGORIES_FETCH_STATE,
} from "../actions/globalActions";
import { GET_CATEGORIES_FROM_API } from "../actions/globalActions";

const initalState = {
  roles: [],
  categories: [],
  theme: "",
  language: "",
  cfetchstate: FETCH_STATES.notFetched,
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
    case SET_CATEGORIES_FETCH_STATE:
      const cstate = {
        ...state,
        cfetchstate: action.payload,
      };
      return cstate;
    default:
      return state;
  }
};
