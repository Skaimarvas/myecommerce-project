import { toast } from "react-toastify";

export const ADD_STORE = "ADD_STORE";

export const addStore = (store) => {
  return {
    type: ADD_STORE,
    payload: store,
  };
};
