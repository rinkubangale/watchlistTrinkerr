import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StoreContextProvider } from "./Context/Context";

ReactDOM.render(
  <StoreContextProvider>
    <App />
  </StoreContextProvider>,
  document.getElementById("root")
);
