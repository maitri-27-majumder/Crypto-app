import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./App.css";
import "./styles/Common.scss"

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
