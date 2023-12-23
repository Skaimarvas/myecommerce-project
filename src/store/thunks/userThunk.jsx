import { axiosInstance } from "../../api/api";
import { toast } from "react-toastify";
import {
  postSignupDataToApi,
  postLoginDataToApi,
} from "../actions/userActions";
import { FETCH_STATES } from "../actions/globalActions";
import { setUserFetchState } from "../actions/userActions";

export const postSignup = (data) => {
  return (dispatch, getState) => {
    axiosInstance
      .post("/signup", data)
      .then((res) => {
        dispatch(postSignupDataToApi(data));
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
};

export const postLogin = (data) => {
  return (dispatch, getState) => {
    dispatch(setUserFetchState(FETCH_STATES.fetching));
    axiosInstance
      .post("/login", data)
      .then((res) => {
        dispatch(postLoginDataToApi(res.data));
        dispatch(setUserFetchState(FETCH_STATES.fetched));
        toast.success("You succesfully logged in!");
      })
      .catch((err) => {
        toast.error("Your password or email are wrong!");
        dispatch(setUserFetchState(FETCH_STATES.failed));
      });
  };
};
