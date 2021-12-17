import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGauge } from "@progress/kendo-react-gauges";

const linearOptions = {
  value: 0,
  shape: "arrow",
  scale: {
    minorUnit: 100,
    majorUnit: 500,
    max: 3000,
  },
};

const AltitudeLinearGauge = (props) => {
  const [linearOptions, setLinearOptions] = React.useState({});
  React.useEffect(() => {
    setLinearOptions(getUpToDateObj(props.altitude));
  }, [props.altitude]);

  return <LinearGauge {...linearOptions} />;
};

function getUpToDateObj(val) {
  let linear = {};
  return (linear = {
    value: val,
    shape: "arrow",
    scale: {
      minorUnit: 100,
      majorUnit: 500,
      max: 3000,
    },
  });
}
export default AltitudeLinearGauge;
