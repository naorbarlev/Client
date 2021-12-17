import React, { Component } from "react";
import "./App.css";
// import "@progress/kendo-theme-default/dist/all.css";
import "@progress/kendo-theme-bootstrap/dist/all.css";
import { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

import ControlPanel from "./components/ControlPanel";

const ENDPOINT = "http://localhost:4001";

const socket = socketIOClient(ENDPOINT);

let state = {
  altitude: "",
  adi: "",
  his: "",
};

const App = () => {
  if (socket == null) {
    socket = socketIOClient(ENDPOINT);
  }
  const [state, updateState] = useState({});

  useEffect(() => {
    socket.on("SEND_OBJECT", (dataObj) => {
      updateState(dataObj);
    });
  }, []);

  return (
    <div className="DashBoard">
      {/* <AltitudeLinearGauge altitude={state.altitude}></AltitudeLinearGauge>
      <AdiAngle adi={state.adi}></AdiAngle> */}
      <ControlPanel serverData={state}></ControlPanel>
    </div>
  );
};

export default App;
