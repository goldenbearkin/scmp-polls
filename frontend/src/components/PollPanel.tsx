import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiSelectors } from "../modules/ui";
import styled from "styled-components";
import classnames from "classnames";
import { apiActions } from "../modules/api";
import { PollChart } from "./PollChart";
import { PollTotal } from "./PollTotal";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-template-rows: 100px 1fr 100;
  grid-template-areas:
    "   title   chart   "
    "   options chart   "
    "   total   chart   ";
  height: 70vh;
  background-color: var(--light);

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    grid-template-areas:
      "   title   "
      "   options "
      "   chart   "
      "   total   ";
  }
`;

const StyledTitle = styled.div`
  grid-area: title;
  padding: 16px;
`;

const StyledChart = styled.div`
  grid-area: chart;
  justify-self: start;
  align-self: center;
`;

const StyledOptions = styled.div`
  grid-area: options;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledTotal = styled.div`
  grid-area: total;
  padding: 16px;
`;

export const PollPanel = () => {
  const dispatch = useDispatch();

  const pollDescription = useSelector(uiSelectors.getSelectedPollDescription);

  if (pollDescription === null) return null;

  const { answer, title } = pollDescription;

  return (
    <StyledContainer>
      <StyledTitle>
        <h3>{title}</h3>
      </StyledTitle>
      <StyledChart>
        <PollChart optionIds={answer.options.map(({ id }) => id) ?? []} />
      </StyledChart>
      <StyledOptions>
        {answer.options.map((option, index) => (
          <button
            key={option.id}
            className={classnames(
              "w-25 btn btn-sm mb-1",
              index % 2 ? " btn-primary" : "btn-secondary"
            )}
            onClick={() => dispatch(apiActions.vote.request(option.id))}
          >
            {option.label}
          </button>
        ))}
      </StyledOptions>
      <StyledTotal>
        <PollTotal optionIds={answer.options.map(({ id }) => id) ?? []} />
      </StyledTotal>
    </StyledContainer>
  );
};
