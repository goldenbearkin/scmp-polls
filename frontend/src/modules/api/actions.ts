import { createAsyncAction } from "typesafe-actions";
import { IPollDescription, IPollResult } from "./models";

export const loadPollsDescription = createAsyncAction(
  "[API] Load Polls Description",
  "[API] List Polls Description Success",
  "[API] List Polls Description Failure",
  "[API] List Polls Description Cancel"
)<undefined, IPollDescription[], Error, undefined>();

export const loadPollsResult = createAsyncAction(
  "[API] Load Polls Result",
  "[API] List Polls Result Success",
  "[API] List Polls Result Failure",
  "[API] List Polls Result Cancel"
)<undefined, IPollResult[], Error, undefined>();

export const vote = createAsyncAction(
  "[API] Vote Result",
  "[API] Vote Success",
  "[API] Vote Failure",
  "[API] Vote Cancel"
)<number, IPollResult[], Error, undefined>();
