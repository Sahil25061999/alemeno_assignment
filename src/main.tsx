import React from "react";
import ReactDOM from "react-dom/client";
import { makeServer } from "./backend/server";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./redux-toolkit/store.ts";
import App from "./App.tsx";
import "./index.css";

if (import.meta.env.VITE_NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
