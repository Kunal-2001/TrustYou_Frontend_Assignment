import React from "react";
import { AgChartsReact } from "ag-charts-react";

export default function PieChart({ data, pieSeries }) {
  const options = {
    data,
    title: {
      text: `Reviews frequency by ${Object.keys(data[0])[0]} category`,
    },
    series: pieSeries,
  };
  return (
    <div style={{ marginTop: "-20px" }}>
      <AgChartsReact options={options} />
    </div>
  );
}
