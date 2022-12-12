import { compose,legacy_createStore,combineReducers,applyMiddleware} from "redux";


import thunk from "redux-thunk";

const rootReducer = combineReducers({
 
});
const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  createComposer(applyMiddleware(thunk))
  );