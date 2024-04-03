import React from "react";
import "../../styles/Topbar.scss";
import Metamask from "./Metamask";

const Topbar = () => {
  return (
    <div className="topbar__container">
      <div>
        <h1>Hello, User 👋 </h1>
        <p>Welcome to Maitri's Dashboard !</p>
      </div>
      <div>
        <Metamask />
      </div>
      <div className="nav__logo-container">
        <div className="nav__logo">CC</div>
      </div>
    </div>
  );
};

export default Topbar;
