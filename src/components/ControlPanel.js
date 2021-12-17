import * as React from "react";
import * as ReactDOM from "react-dom";
import "@progress/kendo-theme-bootstrap/dist/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@progress/kendo-react-buttons";
import AltitudeLinearGauge from "./AltitudeLinearGauge";
import AdiAngle from "./AdiAngle";
import Compass from "./Compass";
// import "./styles.css";

const ControlPanel = (props) => {
  return (
    <div class="border border-primary align-items-center">
      <div class="row k-mb-4"></div>
      <div class="row k-mb-4">
        <div class="col-1"></div>
        <div class="col-6">
          <Button type="button" class="btn btn-primary btn-lg">
            Visual
          </Button>
        </div>
        <div class="col-5"></div>
      </div>
      <div class="row k-mb-4">
        <div class="col-1"></div>
        <div class="col-6">
          <Button class="btn btn-primary btn-lg">Text</Button>
        </div>
        <div class="col-5"></div>
      </div>

      <div class="row k-mb-4" id="TextDiv">
        <div class="col-1"></div>
        <div class="col col-2">Values recieved from server:</div>
        <div class="col col-1">Altitude: {props.serverData.altitude} </div>
        <div class="col col-1">HIS: {props.serverData.his}</div>
        <div class="col col-1">ADI: {props.serverData.adi}</div>
        <div class="col-7"></div>
      </div>

      <div class="row k-mb-4"></div>

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

// function OnButtonTextClick() {
//   console.log("OnTextClick");
//   //let text = document.getElementById("TextDiv");
//   //let visual = document.getElementById("VisualDiv");
//   //text.style.visibility = "visible";
//   //visual.style.visibility = "hidden";
// }
// function OnButtonVisualClick() {
//   console.log("OnVisualClick");
//   document.getElementById("TextDiv").visibility = "hidden";
//   document.getElementById("VisualDiv").visibility = "visible";
//   //let text = (document.getElementById("TextDiv").visibility = "hidden");
//   //let visual = (document.getElementById("VisualDiv").visibility = "visible");

//   //visual.style.visibility = "visible";
//   //text.style.visibility = "hidden";
// }
export default ControlPanel;
