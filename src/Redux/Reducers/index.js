import { combineReducers } from "redux";
import authReducer from "./authReducer";
import fieldReducer from "./fieldReducer";
import alertReducer from "./alertReducer";

const rootReducer = combineReducers({
  authReducer,
  fieldReducer,
  alertReducer,
});

export default rootReducer;
