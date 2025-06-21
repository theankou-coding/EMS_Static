import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
// import App from "./App.jsx"; // Keep this commented
import Page from "./Page.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Page />
  </StrictMode>
);
