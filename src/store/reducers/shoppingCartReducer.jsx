import {
  ADD_PRODUCT_TO_CART,
  DECREASE_PRODUCT_FROM_CART,
  DELETE_PRODUCT_FROM_CART,
  INCREASE_PRODUCT_FROM_CART,
} from "../actions/shoppingCartActions";

const initialState = {
  cart: [],
  payment: {},
  adress: {},
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      const existingProduct = state.cart.findIndex(
        (item) => item.product.id === action.payload.product.id
      );

      if (existingProduct !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingProduct].count += action.payload.count;

        return { ...state, cart: updatedCart };
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }
    case DELETE_PRODUCT_FROM_CART:
      const deletedProduct = state.cart.filter(
        (item) => item.product.id !== action.payload
      );

      return {
        ...state,
        cart: [...deletedProduct],
      };

    case DECREASE_PRODUCT_FROM_CART:
      const decreasedProduct = state.cart.findIndex(
        (item) => item.product.id === action.payload
      );

      if (decreasedProduct !== -1) {
        const updatedCart = [...state.cart];
        if (updatedCart[decreasedProduct].count > 1) {
          updatedCart[decreasedProduct].count -= 1;
        }
        return {
          ...state,
          cart: updatedCart,
        };
      }
    case INCREASE_PRODUCT_FROM_CART:
      const increasedProduct = state.cart.findIndex(
        (item) => item.product.id === action.payload
      );

      if (increasedProduct !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[increasedProduct].count += 1;
        return {
          ...state,
          cart: updatedCart,
        };
      }
    default:
      return state;
  }
};
