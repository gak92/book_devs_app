import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import { devToolsEnhancer } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  devToolsEnhancer(applyMiddleware(logger))
);

export default store;