import { Doughnut } from "@reactchartjs/react-chart.js";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { apiSelectors } from "../modules/api";

interface IProps {
  optionIds: number[];
}

export const PollChart: React.FC<IProps> = ({ optionIds }) => {
  const pollsResult = useSelector(apiSelectors.getPollsResult);

  const data = useMemo(() => {
    const current = optionIds.map(
      (id) =>
        pollsResult.payload?.find((result) => result.id === id)?.amount ?? 0
    );
    return {
      label: [],
      datasets: [
        {
          data: current.every((amount) => amount === 0)
            ? current.map(() => 1)
            : current,
          backgroundColor: optionIds.map((_, index) =>
            index % 2 ? "#ffca05" : "#001246"
          ),
          borderWidth: 1,
        },
      ],
    };
  }, [optionIds, pollsResult]);
  return <Doughnut redraw={false} type="" data={data} />;
};
