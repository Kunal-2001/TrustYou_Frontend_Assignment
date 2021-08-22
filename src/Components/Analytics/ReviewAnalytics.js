import React from "react";
import EntityTable from "./EntityTable";
import "./ReviewAnalytics.css";

function ReviewAnalytics({ data }) {
  console.log(data);
  return (
    <div className="Analytics-Container">
      <EntityTable />
      <EntityTable />
      <EntityTable />
    </div>
  );
}

export default ReviewAnalytics;
