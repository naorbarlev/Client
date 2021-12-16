import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGauge } from "@progress/kendo-react-gauges";

const AltitudeLinearGauge = (props) => {
  console.log("1 => " + props.altitude);

  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    console.log("2 => " + props.altitude);
    console.log("3 => " + value);
    setValue(props.altitude);
  }, [props.altitude]);

  const linearOptions = {
    value: value,
    shape: "arrow",
    scale: {
      minorUnit: 100,
      majorUnit: 500,
      max: 3000,
    },
  };
  return <LinearGauge {...linearOptions} />;
};

export default AltitudeLinearGauge;
