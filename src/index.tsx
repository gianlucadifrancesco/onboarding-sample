import React from "react";
import ReactDOM from "react-dom";
import "./fonts.css";
import "./animations.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { persistor } from "./store/store";

// Wait for hydrate to complete before rendering
async function init() {
  await persistor();
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

init();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
