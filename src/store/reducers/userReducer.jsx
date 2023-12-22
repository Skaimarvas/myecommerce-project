import { POST_SIGNUP_DATA_TO_API } from "../actions/userActions";

const initialState = {
  users: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_SIGNUP_DATA_TO_API:
      const user = {
        ...state,
        users: [...state.users, action.payload],
      };
      return user;

    default:
      return state;
  }
};
