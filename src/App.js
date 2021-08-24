import "./App.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Dashboard from "./Components/Analytics/Dashboard";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    Axios.get(
      "https://front-end-technical-test-api.integration.eu.cloud.trustyou.net/review-distribution"
    )
      .then(function (res) {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Dashboard data={data} />
    </div>
  );
}

export default App;
