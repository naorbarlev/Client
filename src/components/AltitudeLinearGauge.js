import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGauge } from "@progress/kendo-react-gauges";

const AltitudeLinearGauge = (props) => {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
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
