import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"; // Make sure App is also a TypeScript file (App.tsx)
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you use a service worker:
// serviceWorker.unregister();

// Or if you're measuring performance in your app, you can pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
