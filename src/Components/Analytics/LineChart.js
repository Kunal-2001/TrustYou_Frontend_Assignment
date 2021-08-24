import React from "react";
import { AgChartsReact } from "ag-charts-react";

export default function LineChart({ data, lineSeries }) {
  const options = {
    data,
    title: {
      text: `Reviews frequency by ${Object.keys(data[0])[0]} category`,
    },
    series: lineSeries,
  };
  return (
    <div>
      <AgChartsReact options={options} />
    </div>
  );
}
