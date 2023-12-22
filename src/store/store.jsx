import React from "react";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
//Reducers
import { globalReducer } from "./reducers/globalReducer";
import { userReducer } from "./reducers/userReducer";
import { productReducer } from "./reducers/productReducer";

const reducers = combineReducers({
  global: globalReducer,
  user: userReducer,
  product: productReducer,
});

export const store = createStore(reducers, applyMiddleware(logger, thunk));
