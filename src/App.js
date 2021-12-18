import React from "react";
import "./App.css";
import "@progress/kendo-theme-bootstrap/dist/all.css";
import { Button } from "@progress/kendo-react-buttons";
import { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import TextlPanel from "./components/TextPanel";
import ControlPanel from "./components/ControlPanel";

const ENDPOINT = "http://localhost:4001";

let socket = socketIOClient(ENDPOINT);

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
  const [showText, setShowText] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const onTextClick = () => {
    setShowText(true);
    setShowControls(false);
  };
  const onVisualClick = () => {
    setShowControls(true);
    setShowText(false);
  };

  useEffect(() => {
    socket.on("SEND_OBJECT", (dataObj) => {
      updateState(dataObj);
    });
  }, []);

  return (
    <div className="DashBoard">
      <div class="row k-mb-4">
        <div class="col-1"></div>
        <div class="col-6">
          <Button
            type="button"
            onClick={onVisualClick}
            class="btn btn-primary btn-lg"
          >
            Visual
          </Button>
        </div>
        <div class="col-5"></div>
      </div>
      <div class="row k-mb-4"></div>

      <div class="row k-mb-4">
        <div class="col-1"></div>
        <div class="col-6">
          <Button class="btn btn-primary btn-lg" onClick={onTextClick}>
            Text
          </Button>
        </div>
        <div class="col-5"></div>
      </div>
      <div class="row k-mb-4"></div>
      {showControls ? <ControlPanel serverData={state}></ControlPanel> : null}
      <div class="row k-mb-4"></div>

      {showText ? <TextlPanel serverData={state}></TextlPanel> : null}
    </div>
  );
};

export default App;
