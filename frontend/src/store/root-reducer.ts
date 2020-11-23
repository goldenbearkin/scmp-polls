import { combineReducers } from "redux";

import uiReducer from "../modules/ui/reducers";
import apiReducer from "../modules/api/reducer";

const rootReducer = combineReducers({
  ui: uiReducer,
  api: apiReducer,
});

export default rootReducer;
