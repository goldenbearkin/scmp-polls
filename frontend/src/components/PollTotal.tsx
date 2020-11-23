import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { apiSelectors } from "../modules/api";

interface IProps {
  optionIds: number[];
}

export const PollTotal: React.FC<IProps> = ({ optionIds }) => {
  const pollsResult = useSelector(apiSelectors.getPollsResult);

  const total = useMemo(() => {
    const amounts = optionIds.map(
      (id) =>
        pollsResult.payload?.find((result) => result.id === id)?.amount ?? 0
    );
    return amounts.reduce((acc, cur) => acc + cur, 0);
  }, [optionIds, pollsResult]);

  return <small>Total number of votes recorded: {total}</small>;
};
