import { combineEpics } from "redux-observable";

import * as apiEpics from "../modules/api/epics";

export default combineEpics(...Object.values(apiEpics));
