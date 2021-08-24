import React, { useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import IconButton from "@material-ui/core/IconButton";
import Chart from "./Chart";
import Axios from "axios";
import ReviewCard from "../Reviews/ReviewCard";
import "./EntityTable.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";

const EntityTable = ({ entityType, entityData }) => {
  const rowData = [];
  let subEntityName = entityType.split("_")[1];

  for (let key in entityData) {
    let entityField = key;
    let entityFieldCount = entityData[key];

    const entityObj = {
      [subEntityName]: entityField,
      Count: entityFieldCount,
    };
    rowData.push(entityObj);
  }

  const modifiedEntityType = () => {
    const readableEntityType = entityType.replace(/_/g, " ");
    const length = readableEntityType.length;

    const capitalizedEntityType =
      readableEntityType.charAt(0).toUpperCase() +
      readableEntityType.slice(1, length);

    return capitalizedEntityType;
  };

  const [chart, setChart] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [filterData, setFilterData] = useState();

  const handleCellClick = (evt) => {
    const filterType = entityType;
    const filterValue = evt.data[Object.keys(evt.data)[0]];
    const URL = `https://front-end-technical-test-api.integration.eu.cloud.trustyou.net/reviews?filter_type=${filterType}&filter_value=${filterValue}`;

    Axios.get(URL)
      .then((res) => {
        setFilterData(res.data.data);
        setShowReviews(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showPieChart = () => {
    setChart(true);
  };

  const defaultColDefs = {
    sortable: true,
    flex: 2,
    minWidth: 100,
  };

  return (
    <div className="table-container">
      {chart && (
        <Chart data={rowData} setChart={setChart} entityCol={subEntityName} />
      )}
      {showReviews && (
        <ReviewCard
          setShowReviews={setShowReviews}
          showReviews={showReviews}
          data={filterData}
        />
      )}

      <div className="ag-theme-material" style={{ height: 600, width: 400 }}>
        <AgGridReact
          defaultColDef={defaultColDefs}
          headerHeight={70}
          rowData={rowData}
          onCellClicked={handleCellClick}
        >
          <AgGridColumn headerName={modifiedEntityType()}>
            <AgGridColumn field={subEntityName}></AgGridColumn>
            <AgGridColumn field="Count"></AgGridColumn>
          </AgGridColumn>
        </AgGridReact>
      </div>
      <div className="chart-button">
        <IconButton onClick={showPieChart} aria-label="chart-icon">
          <img
            className="graph-icon"
            src="https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg"
          />
        </IconButton>
      </div>
    </div>
  );
};

export default EntityTable;
