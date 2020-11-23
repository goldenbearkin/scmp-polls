import { RootState } from "typesafe-actions";

export const getSelectedPollDescription = (state: RootState) =>
  state.ui.selectedPoll;
