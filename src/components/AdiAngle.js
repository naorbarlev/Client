import * as React from "react";
import * as ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartTitle,
} from "@progress/kendo-react-charts";
import "hammerjs";
const series = [
  {
    category: "",
    value: 0,
  },
  {
    category: "",
    value: 0,
  },
  {
    category: "",
    value: 0,
  },
];

const AdiAngle = (props) => {
  const [series, setSeries] = useState({});

  useEffect(() => {
    console.log("useEffect()");
    setSeries(inputCheck(props.adi));
  }, [props.adi]);

  return (
    <Chart>
      <ChartSeries>
        <ChartSeriesItem type="pie" data={series} field="value" />
      </ChartSeries>
    </Chart>
  );
};

function inputCheck(val) {
  let returnSeries = [];
  console.log("inputCheck function val => " + val);

  if (val > 0 && val <= 100) {
    returnSeries = [
      {
        category: "",
        value: 1,
      },
      {
        category: "",
        value: 0,
      },
      {
        category: "",
        value: 0,
      },
    ];
  }
  if (val == 0) {
    returnSeries = [
      {
        category: "",
        value: 0,
      },
      {
        category: "",
        value: 1,
      },
      {
        category: "",
        value: 1,
      },
    ];
  }
  if (val >= -100 && val < 0) {
    returnSeries = [
      {
        category: "",
        value: 0,
      },
      {
        category: "",
        value: 0,
      },
      {
        category: "",
        value: 1,
      },
    ];
  }
  return returnSeries;
}

export default AdiAngle;
