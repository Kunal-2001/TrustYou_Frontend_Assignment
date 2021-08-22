import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import ReviewAnalytics from "./Components/Analytics/ReviewAnalytics";

function App() {
  const [data, setData] = useState("");

  useEffect(async () => {
    Axios.get(
      "https://front-end-technical-test-api.integration.eu.cloud.trustyou.net/review-distribution"
    )
      .then(function (res) {
        console.log(res);
        // setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
  return (
    <div className="App">
      <ReviewAnalytics data={data} />
    </div>
  );
}

export default App;
