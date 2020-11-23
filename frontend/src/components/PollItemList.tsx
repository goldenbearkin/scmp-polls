import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PollItem } from "./PollItem";
import styled from "styled-components";

import { apiActions, apiSelectors } from "../modules/api";
import { uiActions, uiSelectors } from "../modules/ui";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 100px;

  @media (max-width: 600px) {
    grid-template-columns: 100%;
  }
`;

interface IProps {
  onSelected?: (id: number) => void;
}

export const PollDescriptionList: FC<IProps> = ({ onSelected }) => {
  const dispatch = useDispatch();

  const { loading, payload } = useSelector(apiSelectors.getAllPollDescription);

  const selectedPoll = useSelector(uiSelectors.getSelectedPollDescription);

  useEffect(() => {
    dispatch(apiActions.loadPollsDescription.request());
    return () => {
      dispatch(apiActions.loadPollsDescription.cancel());
    };
  }, [dispatch]);

  if (loading || payload === undefined) return null;

  return (
    <StyledContainer>
      {payload
        .filter((description) => description.id !== selectedPoll?.id)
        .map((poll) => (
          <PollItem
            key={poll.id}
            description={poll}
            onSelected={(id) => dispatch(uiActions.selectPollId(id))}
          />
        ))}
    </StyledContainer>
  );
};
