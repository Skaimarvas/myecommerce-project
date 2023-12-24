import { toast } from "react-toastify";

import { FETCH_STATES } from "../actions/globalActions";
import {
  LOGOUT_USER,
  POST_SIGNUP_DATA_TO_API,
  SET_USER_FETCH_STATE,
} from "../actions/userActions";
import { POST_LOGIN_DATA_TO_API } from "../actions/userActions";
const userInfo = localStorage.getItem("user")
  ? { email: JSON.parse(localStorage.getItem("user")) }
  : {};
const initialState = {
  newUsers: [],
  user: userInfo,
  userfetchstate: FETCH_STATES.notFetched,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_SIGNUP_DATA_TO_API:
      const newUser = {
        ...state,
        newUsers: [...state.newUsers, { ...action.payload }],
      };
      return newUser;
    case POST_LOGIN_DATA_TO_API:
      const loguser = {
        ...state,
        user: { ...action.payload },
      };
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return loguser;
    case LOGOUT_USER:
      const logoutuser = {
        ...state,
        user: {},
      };
      toast.success("You succesfully logged out!");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return logoutuser;
    case SET_USER_FETCH_STATE:
      const userFetch = {
        ...state,
        userfetchstate: action.payload,
      };
      return userFetch;

    default:
      return state;
  }
};
