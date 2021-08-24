import React from "react";
import { AgChartsReact } from "ag-charts-react";

function BarChart({ data, barSeries }) {
  const options = {
    data,
    title: {
      text: `Reviews frequency by ${Object.keys(data[0])[0]} category`,
    },
    series: barSeries,
  };

  return (
    <div>
      <AgChartsReact options={options} />
    </div>
  );
}

export default BarChart;
