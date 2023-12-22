import { axiosInstance } from "../../api/api";
import { toast } from "react-toastify";

export const POST_SIGNUP_DATA_TO_API = "POST_SIGNUP_DATA_TO_API";

export const postSignupDataToApi = (sign) => {
  return {
    type: POST_SIGNUP_DATA_TO_API,
    payload: sign,
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
      .catch((err) => toast.error(err.message));
  };
};
