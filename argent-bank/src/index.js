import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from the correct path
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "../src/app/store";
import { BrowserRouter } from "react-router-dom";
import "../src/style/index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
