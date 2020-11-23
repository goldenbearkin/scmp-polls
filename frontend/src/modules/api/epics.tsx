import { Epic } from "redux-observable";
import { of } from "rxjs";
import { filter, switchMap, map, takeUntil, catchError } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { RootAction, RootState, isActionOf } from "typesafe-actions";

import { IPollDescription, IPollResult } from "./models";
import { apiActions } from "../api";

const BACKEN_URL = "http://localhost:8000";

export const loadPollsDescriptionEpic: Epic<
  RootAction,
  RootAction,
  RootState
> = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(apiActions.loadPollsDescription.request)),
    switchMap(() =>
      ajax.getJSON<IPollDescription[]>(`${BACKEN_URL}/polls-description`).pipe(
        map(apiActions.loadPollsDescription.success),
        catchError((e) => of(apiActions.loadPollsDescription.failure(e))),
        takeUntil(
          action$.pipe(
            filter(isActionOf(apiActions.loadPollsDescription.cancel))
          )
        )
      )
    )
  );

export const loadPollsResultEpic: Epic<RootAction, RootAction, RootState> = (
  action$,
  state$
) =>
  action$.pipe(
    filter(isActionOf(apiActions.loadPollsResult.request)),
    switchMap(() =>
      ajax.getJSON<IPollResult[]>(`${BACKEN_URL}/polls-result`).pipe(
        map(apiActions.loadPollsResult.success),
        catchError((e) => of(apiActions.loadPollsResult.failure(e))),
        takeUntil(
          action$.pipe(filter(isActionOf(apiActions.loadPollsResult.cancel)))
        )
      )
    )
  );

export const voteEpic: Epic<RootAction, RootAction, RootState> = (
  action$,
  state$
) =>
  action$.pipe(
    filter(isActionOf(apiActions.vote.request)),
    switchMap(({ payload }) =>
      ajax({
        url: `${BACKEN_URL}/polls-result`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: { id: payload },
      }).pipe(
        map((data) => apiActions.loadPollsResult.success(data.response)),
        catchError((e) => of(apiActions.vote.failure(e))),
        takeUntil(action$.pipe(filter(isActionOf(apiActions.vote.cancel))))
      )
    )
  );
