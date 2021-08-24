import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import LineChart from "./LineChart";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 50,
    minWidth: 120,
    position: "relative",
    left: "450px",
    paddingTop: "10px",
  },
}));

export default function Chart({ data, setChart, entityCol }) {
  const classes = useStyles();
  const [open, setOpen] = useState();
  const [chartType, setChartType] = useState("Pie");

  const barSeries = [
    {
      type: "column",
      xKey: entityCol,
      yKeys: ["Count"],
    },
  ];

  const pieSeries = [
    {
      type: "pie",
      angleKey: "Count",
      labelKey: entityCol,
    },
  ];

  const lineSeries = [
    {
      type: "line",
      xKey: entityCol,
      yKey: "Count",
    },
  ];

  const options = {
    data,
    series: [],
  };

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
    setChart(false);
  };

  const handleTypeChange = (e) => {
    const value = e.target.value;
    setChartType(value);
  };

  const displayChartType = () => {
    switch (chartType) {
      case "Pie":
        return <PieChart data={data} pieSeries={pieSeries} />;
      case "Line":
        return <LineChart data={data} lineSeries={lineSeries} />;
      case "Bar":
        return <BarChart data={data} barSeries={barSeries} />;
    }
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <FormControl variant="outlined" className={classes.formControl}>
          <Select
            native
            value={chartType}
            labelId="outlined-chart-native-simple"
            onChange={handleTypeChange}
          >
            <option value={"Pie"}>Pie</option>
            <option value={"Line"}>Line</option>
            <option value={"Bar"}>Bar</option>
          </Select>
        </FormControl>
        {displayChartType()}
      </Dialog>
    </div>
  );
}
