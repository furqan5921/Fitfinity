import {
  compose,
  legacy_createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";
import { authReducer } from "./authReducer/authReducer";
import { dataReducer } from "./datareducer/dataReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  data:dataReducer
});
const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  createComposer(applyMiddleware(thunk))
);
