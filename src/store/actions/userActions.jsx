export const POST_SIGNUP_DATA_TO_API = "POST_SIGNUP_DATA_TO_API";
export const POST_LOGIN_DATA_TO_API = "POST_LOGIN_DATA_TO_API";
export const LOGOUT_USER = "LOGOUT_USER ";
export const SET_USER_FETCH_STATE = "SET_USER_FETCH_STATE";
export const VERIFY_TOKEN = "VERIFY_TOKEN";
export const GET_ADDRESS = "GET_ADDRESS";
export const POST_ADDRESS = "POST_ADDRESS";
export const GET_PAYMENT = "GET_PAYMENT";
export const POST_PAYMENT = "POST_PAYMENT";

export const getPaymentData = (payment) => {
  return {
    type: GET_PAYMENT,
    payload: payment,
  };
};

export const postPaymentData = (payment) => {
  return {
    type: POST_PAYMENT,
    payload: payment,
  };
};

export const postSignupDataToApi = (sign) => {
  return {
    type: POST_SIGNUP_DATA_TO_API,
    payload: sign,
  };
};

export const getAddressData = (adress) => {
  return {
    type: GET_ADDRESS,
    payload: adress,
  };
};

export const postAddressData = (adress) => {
  return {
    type: POST_ADDRESS,
    payload: adress,
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
