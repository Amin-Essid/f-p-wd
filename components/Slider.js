import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

// function valuetext(value) {
//   return `${value}$`;
// }

export default function RangeSlider({ range, setRange }) {
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setRange(newValue);
  };

  return (
    <>
      <div className={classes.root}>
        <Typography
          style={{
            fontSize: "36px",
            fontWeight: "500",
            fontFamily: "OstrichSans-Heavy",
            paddingTop: "0",
            marginBottom: "0",
          }}
          id="range-slider"
          gutterBottom
        >
          PRICE RANGE
        </Typography>
        <Slider
          value={range}
          onChange={handleChange}
          valueLabelDisplay="off"
          aria-labelledby="range-slider"
          // getAriaValueText={valuetext}
        />
      </div>
      <div>
        <div className="minmax">
          <div>Min ($)</div>
          <div
            style={{
              border: "1px solid black",
              width: "50px",
              marginLeft: "5px",
            }}
          >
            {range[0] * 1000}
          </div>
        </div>
        <div className="minmax" style={{ marginLeft: "30px" }}>
          <div>Max ($)</div>
          <div
            style={{
              border: "1px solid black",
              width: "50px",
              marginLeft: "5px",
            }}
          >
            {range[1] * 1000}
          </div>
        </div>
      </div>
    </>
  );
}
