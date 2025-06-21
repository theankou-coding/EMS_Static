import { React } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./style/index.css";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
    <div>
      <AdminDashboard />
    </div>
  );
}

export default App;
