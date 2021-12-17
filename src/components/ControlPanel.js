import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button } from "@progress/kendo-react-buttons";
import AltitudeLinearGauge from "./AltitudeLinearGauge";
import AdiAngle from "./AdiAngle";
import Compass from "./Compass";
// import "./styles.css";

const ControlPanel = (props) => {
  return (
    <div>
      <div className="row k-mb-4">
        <div className="col col-12">
          <Button>Visual</Button>
        </div>
      </div>
      <div className="row k-mb-4">
        <div className="col col-12">
          <Button>Text</Button>
        </div>
      </div>
      <div
        className="row k-mb-4"
        id="VisualDiv"
        style={{ visibility: "visible" }}
      >
        <div className="col col-4">
          <AltitudeLinearGauge
            altitude={props.serverData.altitude}
          ></AltitudeLinearGauge>
        </div>
        <div className="col col-4">
          <Compass his={props.serverData.his}></Compass>
        </div>
        <div className="col col-4">
          <AdiAngle adi={props.serverData.adi}></AdiAngle>
        </div>
      </div>

      <div
        className="row k-mb-4"
        id="TextDiv"
        style={{ visibility: "visible" }}
      >
        <div className="col col-4">altitude: value</div>
        <div className="col col-4">HIS: value</div>
        <div className="col col-4">ADI: value</div>
      </div>
    </div>
  );
};

export default ControlPanel;
