import * as React from "react";
import { LinearGauge } from "@progress/kendo-react-gauges";

const AltitudeLinearGauge = (props) => {
  const [v, setValue] = React.useState({});

  React.useEffect(() => {
    setValue(props.altitude);
  }, [props.altitude]);

  const linearOptions = {
    pointer: {
      value: v,
    },
    scale: {
      minorUnit: 100,
      majorUnit: 500,
      max: 3000,
    },
  };
  return <LinearGauge {...linearOptions} />;
};

function inputCheck(val) {
  let myvalue = parseInt(val) * 1;

  return myvalue;
}
export default AltitudeLinearGauge;
