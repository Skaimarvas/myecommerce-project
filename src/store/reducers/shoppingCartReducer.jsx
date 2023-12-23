import { ADD_PRODUCT_TO_CART } from "../actions/shoppingCartActions";

const initialState = {
  cart: [],
  payment: {},
  adress: {},
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      const productcart = {
        ...state,
        //id ile count kontrolü yapılacak
        cart: [...state.cart, action.payload],
      };
      return productcart;
    default:
      return state;
  }
};
