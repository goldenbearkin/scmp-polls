import { createAction } from "typesafe-actions";
import { IPollDescription } from "../api";

// import { IOrder } from './models';

export const selectPollId = createAction(
  "[UI] Select Poll ID",
  (desc: IPollDescription) => desc
)();
