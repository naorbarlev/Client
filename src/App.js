import React from "react";
import { useState, useEffect } from "react";
// import CreateMessage from './components/CreateMessage';
// import Messages from './components/Messages';

import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:4001";
console.log("in client");
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

      console.log(
        "values from server => " +
          state.altitude +
          " " +
          state.his +
          " " +
          state.adi
      );
    });
  }, []);

  return (
    <div className="DashBoard">
      <p>altitude {state.altitude}</p>
      <p>HIS {state.his}</p>
      <p>ADI {state.adi}</p>
    </div>
  );
};

export default App;
