import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Sidebar.scss";
import {
  CloseOutlined,
  CodeSandboxOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
  HomeOutlined,
  MenuOutlined,
  WalletOutlined,
} from "@ant-design/icons";

const Sidebar = () => {
  const location = useLocation();

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="nav__wrapper-small-trigger"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {!isOpen ? <MenuOutlined /> : <CloseOutlined />}
      </div>
      <div className={`nav__wrapper ${isCollapsed ? "nav__is-collapsed" : ""} ${!isOpen ? "isHidden" : ""}`}>
        <div className="nav__container-wrapper">
          <nav className="nav__container">
            <Link to="/home" className="nav__header">
              <div className="nav__logo">CC</div>
              {!isCollapsed && <div className="nav__title">Carbon Cell</div>}
            </Link>

            <div className="nav__menu" id="nav-menu">
              <ul className="nav__list">
                <li
                  className={`nav__item ${
                    location.pathname === "/home" ? "active" : ""
                  }`}
                >
                  <Link to="/home" className="nav__link">
                    <HomeOutlined />
                    <span className="nav__link-text">Home</span>
                  </Link>
                </li>
                <li
                  className={`nav__item ${
                    location.pathname === "/assets" ? "active" : ""
                  }`}
                >
                  <Link to="/assets" className="nav__link">
                    <CodeSandboxOutlined />
                    <span className="nav__link-text">Assets</span>
                  </Link>
                </li>
                <li
                  className={`nav__item ${
                    location.pathname === "/wallet" ? "active" : ""
                  }`}
                >
                  <Link to="/wallet" className="nav__link">
                    <WalletOutlined />
                    <span className="nav__link-text">Wallet</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div
          className="nav__collapse"
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
        >
          {isCollapsed ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
