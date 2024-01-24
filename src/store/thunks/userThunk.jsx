import { axiosInstance } from "../../api/api";
import { toast } from "react-toastify";
import {
  postSignupDataToApi,
  postLoginDataToApi,
  setUserFetchState,
  verifyUserToken,
  getOrdersData,
} from "../actions/userActions";
import { FETCH_STATES } from "../actions/globalActions";

export const getOrders = () => {
  return (dispatch, getState) => {
    axiosInstance
      .get("/order")
      .then((res) => dispatch(getOrdersData(res.data)))
      .catch((err) => console.log("ORDERS GET EDİLİRKEN HATA OLUŞTU"));
  };
};
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

    // Returning the promise here
    return axiosInstance
      .post("/login", data)
      .then((res) => {
        dispatch(postLoginDataToApi(res.data));
        dispatch(setUserFetchState(FETCH_STATES.fetched));
        toast.success("You successfully logged in!");
      })
      .catch((err) => {
        toast.error("Your password or email is wrong!");
        dispatch(setUserFetchState(FETCH_STATES.failed));
        localStorage.removeItem("token");
        // Propagate the error so that the promise is rejected
        throw err;
      });
  };
};
export const verifyToken = (data) => {
  return (dispatch, getState) => {
    dispatch(setUserFetchState(FETCH_STATES.fetching));
    axiosInstance
      .get("/verify")
      .then((res) => {
        dispatch(verifyUserToken(res.data));
        toast.success("Verification Successfully Completed");
        dispatch(setUserFetchState(FETCH_STATES.fetched));
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        localStorage.removeItem("token");
        dispatch(setUserFetchState(FETCH_STATES.failed));
      });
  };
};
