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
  //אם החיבור לא צלח נסיון התחברות חדש לשרת
  if (socket == null) {
    socket = socketIOClient(ENDPOINT);
  }
  //המכיל את הנתונים המתקבלים מהשרת STATE
  const [state, updateState] = useState({});
  // לטיפול לליצת כפתור הטקסט STATE יצירת
  const [showText, setShowText] = useState(false);
  // לטיפול ללחיצת כפתור התצוגה STATE יצירת
  const [showControls, setShowControls] = useState(false);

  //על המסך יוצג או תצוגה ויזאולית או טקסטואלית
  //אירוע לחיצה על כתפור טקסט
  const onTextClick = () => {
    //מפעיל את הפונקציה לדריסת המצב הנוכחי ושם אמת לטקסט ושקר לתצוגה
    setShowText(true);
    setShowControls(false);
  };
  //אירוע לחיצה על כתפור תצוגה
  const onVisualClick = () => {
    //מפעיל את הפונקציה לדריסת המצב הנוכחי ושם אמת לתצוגה ושקר לטקסט
    setShowControls(true);
    setShowText(false);
  };

  useEffect(() => {
    //מופעל בעת שליחת מידע מהשרת
    socket.on("SEND_OBJECT", (dataObj) => {
      //דריסת המצב הנוחכי ועדכון האובייקט על ידי המידע שהתקבל מהשרת
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
