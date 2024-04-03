import React, { useEffect, useState } from "react";
import { Web3 } from "web3";
import "../../styles/Metamask.scss";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Metamask = () => {
  const [connectedAccount, setConnectedAccount] = useState(null);
  useEffect(() => {
    console.log(connectedAccount);
  });

  async function connectMetamask() {
    //check metamask is installed
    if (window.ethereum) {
      // instantiate Web3 with the injected provider
      const web3 = new Web3(window.ethereum);

      //request user to connect accounts (Metamask will prompt)
      await window.ethereum.request({ method: "eth_requestAccounts" });

      //get the connected accounts
      const accounts = await web3.eth.getAccounts();

      //show the first connected account in the react page
      setConnectedAccount(accounts[0]);
    } else {
      alert("Please download metamask");
    }
  }

  return (
    <div>
      {!connectedAccount ? (
        <button onClick={() => connectMetamask()} className="common__btn-ui">
          Connect to Metamask
        </button>
      ) : (
        <div className="metamask__card-container">
          <Avatar size="small" icon={<UserOutlined />} />
          <div className="metamask__card-container-id">{connectedAccount}</div>
        </div>
      )}
    </div>
  );
};

export default Metamask;
