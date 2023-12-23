import { ADD_PRODUCT_TO_CART } from "../actions/shoppingCartActions";

const initialState = {
  product: [],
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      const productcart = {
        ...state,
        //id ile count kontrolü yapılacak
        product: [...state.product, action.payload],
      };
      return productcart;
    default:
      return state;
  }
};
