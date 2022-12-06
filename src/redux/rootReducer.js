import { combineReducers } from "redux";
import devReducer from "./devs/devReducer";

const rootReducer = combineReducers({
  developer: devReducer,
});

export default rootReducer;
