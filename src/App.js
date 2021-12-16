import React, { Component } from "react";
import "./App.css";
import "@progress/kendo-theme-default/dist/all.css";
import AltitudeLinearGauge from "./components/AltitudeLinearGauge";
import { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

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
      <AltitudeLinearGauge altitude={state.altitude}></AltitudeLinearGauge>
      <p>altitude {state.altitude}</p>
      <p>HIS {state.his}</p>
      <p>ADI {state.adi}</p>
    </div>
  );
};

export default App;
