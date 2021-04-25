import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  position: "bottom right",
  timeout: 3000,
  offset: "30px",
  transition: "scale",
};

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
