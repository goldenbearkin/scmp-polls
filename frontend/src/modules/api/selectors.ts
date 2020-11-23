import { RootState } from "typesafe-actions";

export const getAllPollDescription = (state: RootState) =>
  state.api.pollsDescription;

export const getPollsResult = (state: RootState) => state.api.pollsResult;
