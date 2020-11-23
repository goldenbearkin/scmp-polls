import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";

import { IPollDescription, IPollResult } from "./models";

import { apiActions } from "../api";

export type IApiState = {
  pollsDescription: IAsyncResponse<IPollDescription[]>;
  pollsResult: IAsyncResponse<IPollResult[]>;
};

const initialState: IApiState = {
  pollsDescription: { loading: false },
  pollsResult: { loading: false },
};

const pollsDescriptionReducer = createReducer(initialState.pollsDescription)
  .handleAction(apiActions.loadPollsDescription.request, () => ({
    loading: true,
  }))
  .handleAction(apiActions.loadPollsDescription.success, (_state, action) => ({
    loading: false,
    payload: action.payload,
  }))
  .handleAction(apiActions.loadPollsDescription.failure, (_state, action) => ({
    loading: false,
    error: action.payload,
  }))
  .handleAction(apiActions.loadPollsDescription.cancel, (_state, _action) => ({
    loading: false,
  }));

const pollsResultReducer = createReducer(initialState.pollsResult)
  .handleAction(apiActions.loadPollsResult.request, () => ({
    loading: true,
  }))
  .handleAction(apiActions.loadPollsResult.success, (_state, action) => ({
    loading: false,
    payload: action.payload,
  }))
  .handleAction(apiActions.loadPollsResult.failure, (_state, action) => ({
    loading: false,
    error: action.payload,
  }))
  .handleAction(apiActions.loadPollsResult.cancel, (_state, _action) => ({
    loading: false,
  }));

export default combineReducers<IApiState>({
  pollsDescription: pollsDescriptionReducer,
  pollsResult: pollsResultReducer,
});
