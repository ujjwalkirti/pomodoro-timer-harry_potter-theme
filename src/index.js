import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import HouseState from "./services/context/houseState";

ReactDOM.render(
  <HouseState>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HouseState>,
  document.getElementById("root")
);
