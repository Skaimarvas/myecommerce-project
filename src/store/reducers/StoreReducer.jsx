import { ADD_STORE } from "../actions/storeActions";

const initialState = {
  store: [],
};

export const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STORE:
      const storeSec = {
        ...state,
        store: [...state.store, action.payload],
      };
      return storeSec;
    default:
      return state;
  }
};
