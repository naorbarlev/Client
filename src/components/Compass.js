import * as React from "react";
import { RadialGauge } from "@progress/kendo-react-gauges";

const Compass = (props) => {
  const [radialOptions, setRadialOptions] = React.useState({});
  React.useEffect(() => {
    setRadialOptions(getUpToDateObj(props.hsi));
  }, [props]);

  return <RadialGauge {...radialOptions} />;
};

//מחזירה אובייקט חדש על הערך שהגיע מהשרת
function getUpToDateObj(val) {
  let radial = {};
  return (radial = {
    pointer: [
      {
        value: 0,
        color: "blue",
      },
      {
        value: val,
        color: "orange",
      },
    ],
    scale: {
      startAngle: 0,
      endAngle: 360,
      majorUnit: 90,
      minorUnit: 0,
      max: 360,
    },
    content: {
      value: 35,
    },
  });
}
export default Compass;
