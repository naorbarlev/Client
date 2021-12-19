import * as React from "react";
import "@progress/kendo-theme-bootstrap/dist/all.css";
import "bootstrap/dist/css/bootstrap.min.css";

//מציגה את הערכים שהגיעו מהשרת בצורת טקסטואלית
const TextlPanel = (props) => {
  return (
    <div class=" align-items-center">
      <div class="row k-mb-4" id="TextDiv">
        <div class="col-1"></div>
        <div class="col col-2">Values recieved from server:</div>
        <div class="col col-1">Altitude: {props.serverData.altitude} </div>
        <div class="col col-1">HIS: {props.serverData.hsi}</div>
        <div class="col col-1">ADI: {props.serverData.adi}</div>
        <div class="col-7"></div>
      </div>
    </div>
  );
};

export default TextlPanel;
