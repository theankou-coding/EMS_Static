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

// import { StrictMode } from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import "./style/index.css";
// import App from "./App.jsx";
// // import Page from "./Page.jsx";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//       {/* <Page /> */}
//     </BrowserRouter>
//   </StrictMode>
// );
