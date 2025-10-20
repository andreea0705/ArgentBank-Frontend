import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from the correct path
import { Provider } from "react-redux";
import App from "./App";

//import store from "../src/app/store";
import { BrowserRouter } from "react-router-dom";
import "../src/style/index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
      </Provider>
  </React.StrictMode>
);


