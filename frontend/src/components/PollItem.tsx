import React from "react";
import moment from "moment";
import styled from "styled-components";

import { PollChart } from "./PollChart";

import { IPollDescription } from "../modules/api";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const StyledChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
`;

export interface IProps {
  description: IPollDescription;
  onSelected?: (selectedPoll: IPollDescription) => void;
}

export const PollItem: React.FC<IProps> = ({ description, onSelected }) => {
  return (
    <StyledContainer onClick={() => onSelected && onSelected(description)}>
      <StyledChartContainer>
        <PollChart optionIds={description.answer.options.map(({ id }) => id)} />
      </StyledChartContainer>
      <div className="d-flex flex-column">
        <small className="text-muted">
          {moment.unix(description.publishedDate).format("DD MMM YYYY")}
        </small>
        <h6 className="card-title">{description.title}</h6>
      </div>
    </StyledContainer>
  );
};
