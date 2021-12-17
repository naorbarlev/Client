import * as React from "react";
import * as ReactDOM from "react-dom";
import { RadialGauge } from "@progress/kendo-react-gauges";


const Conpass = (props) => {
  const [radialOptions, setRadialOptions] = React.useState({
    showLabels: false,
    showTicks: true,
    ticksColor: "#008000",
    labelsColor: "#0000ff",
    rangeSize: 15,
    rangeLineCap: "round",
    rangeColor: "#ffcccc",
    startAngle: 0,
    endAngle: 360,
    reverse: false,
  });

  React.useEffect(() => {
    setRadialOptions() = () => {
      this.radialOptions.pointer.value = props.his;
    };
  }, [props.his]);

  const {
    showLabels,
    showTicks,
    ticksColor,
    labelsColor,
    rangeSize,
    rangeColor,
    startAngle,
    endAngle,
    reverse,
  } = radialOptions;

  return (
    <div>
      <RadialGauge
        pointer={{
          value: props.his,
        }}
        pointer={{
          value: 0,
        }}
        transitions={false}
        scale={{
          labels: {
            format: "c",
            color: labelsColor,
            visible: showLabels,
          },
          majorTicks: {
            visible: showTicks,
            color: ticksColor,
          },
          minorTicks: {
            visible: showTicks,
            color: ticksColor,
          },
          rangeSize,
          startAngle,
          endAngle,
          reverse,
          ranges: [
            {
              from: 0,
              to: 100,
              color: rangeColor,
            },
          ],
        }}
      />
    </div>
  );
};

export default Compass;
