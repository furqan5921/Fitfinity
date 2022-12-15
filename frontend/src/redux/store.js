import {
  compose,
  legacy_createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";
import { authReducer } from "./authReducer/authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
});
const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  createComposer(applyMiddleware(thunk))
);
