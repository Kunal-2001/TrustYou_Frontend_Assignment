import React from "react";
import ReviewAnalytics from "./ReviewAnalytics";

export default function Dashboard({ data }) {
  return (
    <div>
      <ReviewAnalytics data={data} />
    </div>
  );
}
