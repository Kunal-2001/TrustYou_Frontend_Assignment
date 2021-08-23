import React, { useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import IconButton from "@material-ui/core/IconButton";
import AssessmentIcon from "@material-ui/icons/Assessment";
import PieChart from "./PieChart";

import "./EntityTable.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const EntityTable = () => {
  const [pieChart, setPieChart] = useState(false);
  const rowData = [
    { Score: "Toyota", Count: 10 },
    { Score: "Ford", Count: 33 },
    { Score: "Porsche", Count: 67 },
  ];

  const showPieChart = () => {
    setPieChart(true);
  };

  const defaultColDefs = {
    sortable: true,
    flex: 2,
    minWidth: 200,
  };
  return (
    <div className="table-container">
      {pieChart && <PieChart data={rowData} setPieChart={setPieChart} />}
      <div className="ag-theme-alpine" style={{ height: 450, width: 400 }}>
        <AgGridReact
          defaultColDef={defaultColDefs}
          headerHeight={70}
          rowData={rowData}
        >
          <AgGridColumn headerName="Overall Score">
            <AgGridColumn field="Score"></AgGridColumn>
            <AgGridColumn field="Count"></AgGridColumn>
          </AgGridColumn>
        </AgGridReact>
      </div>
      <div className="chart-button">
        <IconButton onClick={showPieChart} aria-label="delete" size="medium">
          <AssessmentIcon fontSize="inherit" />
        </IconButton>
      </div>
    </div>
  );
};

export default EntityTable;
