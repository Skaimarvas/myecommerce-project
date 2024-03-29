export const POST_SIGNUP_DATA_TO_API = "POST_SIGNUP_DATA_TO_API";
export const POST_LOGIN_DATA_TO_API = "POST_LOGIN_DATA_TO_API";
export const LOGOUT_USER = "LOGOUT_USER ";
export const SET_USER_FETCH_STATE = "SET_USER_FETCH_STATE";
export const VERIFY_TOKEN = "VERIFY_TOKEN";
export const GET_USER_ADDRESS = "GET_USER_ADDRESS";
export const GET_USER_PAYMENT = "GET_USER_PAYMENT";

export const getUserPaymentData = (payment) => {
  return {
    type: GET_USER_PAYMENT,
    payload: payment,
  };
};
export const getUserAddressData = (address) => {
  return {
    type: GET_USER_ADDRESS,
    payload: address,
  };
};
export const postSignupDataToApi = (sign) => {
  return {
    type: POST_SIGNUP_DATA_TO_API,
    payload: sign,
  };
};
export const postLoginDataToApi = (login) => {
  return {
    type: POST_LOGIN_DATA_TO_API,
    payload: login,
  };
};
export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};
export const verifyUserToken = (tokenkey) => {
  return {
    type: VERIFY_TOKEN,
    payload: tokenkey,
  };
};
export const setUserFetchState = (fetchstate) => {
  return {
    type: SET_USER_FETCH_STATE,
    payload: fetchstate,
  };
};
