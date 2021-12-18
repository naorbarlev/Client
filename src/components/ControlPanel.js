import * as React from "react";
import "@progress/kendo-theme-bootstrap/dist/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AltitudeLinearGauge from "./AltitudeLinearGauge";
import AdiAngle from "./AdiAngle";
import Compass from "./Compass";

// מכיל את הפקדים הויזואלים
const ControlPanel = (props) => {
  return (
    <div class=" align-items-center">
      <div className="row k-mb-4" id="VisualDiv">
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
    </div>
  );
};

export default ControlPanel;
