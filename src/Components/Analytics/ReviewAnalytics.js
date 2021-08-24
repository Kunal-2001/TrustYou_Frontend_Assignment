import React from "react";
import EntityTable from "./EntityTable";
import "./ReviewAnalytics.css";

function ReviewAnalytics({ data }) {
  const displayEntityTables = () => {
    var rows = [];
    for (let key in data) {
      rows.push(
        <EntityTable key={key} entityType={key} entityData={data[key]} />
      );
    }
    return rows;
  };
  return <div className="Analytics-Container">{displayEntityTables()}</div>;
}

export default ReviewAnalytics;
