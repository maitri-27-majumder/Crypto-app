import React from "react";
import Topbar from "../components/dashboard/Topbar";
import "../styles/Dashboard.scss";
import GraphCard from "../components/dashboard/GraphCard";
import BitcoinSegment from "../components/dashboard/BitcoinSegment";

const Dashboard = () => {
  return (
    <div className="dashboard__container">
      <Topbar />
      <GraphCard />
      <BitcoinSegment />
    </div>
  );
};

export default Dashboard;
