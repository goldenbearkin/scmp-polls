import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";
import { apiActions, IPollDescription } from "../api";

import { uiActions } from "../ui";

interface IUiState {
  selectedPoll: IPollDescription | null;
}

const initialState: IUiState = {
  selectedPoll: null,
};

const selectedPollReducer = createReducer(initialState.selectedPoll)
  .handleAction(apiActions.loadPollsDescription.success, (_state, action) => {
    return action.payload.length > 0 ? action.payload[0] : null;
  })
  .handleAction(uiActions.selectPollId, (_state, action) => {
    return action.payload;
  });

export default combineReducers<IUiState>({
  selectedPoll: selectedPollReducer,
});
