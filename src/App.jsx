import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./App.css";
import "./styles/Common.scss";
import ColumnGroup from "antd/es/table/ColumnGroup";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, []);
  console.log(location);
  return (
    <div className="app">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
