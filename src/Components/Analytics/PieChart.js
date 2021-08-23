import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { AgChartsReact } from "ag-charts-react";

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

export default function PieChart({ data, setPieChart }) {
  const classes = useStyles();
  const [open, setOpen] = useState();
  const options = {
    data,
    series: [
      {
        type: "pie",
        angleKey: "Count",
        labelKey: "Score",
      },
    ],
  };

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
    setPieChart(false);
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-age-native-simple">
            Chart Format
          </InputLabel>
          <Select
            native
            value="Ten"
            label="Age"
            inputProps={{
              name: "age",
              id: "outlined-age-native-simple",
            }}
          >
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </FormControl>
        <AgChartsReact options={options} />
      </Dialog>
    </div>
  );
}
