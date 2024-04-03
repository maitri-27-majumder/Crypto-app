import React, { useEffect, useState } from "react";
import CryptoCard from "./CryptoCard";
import "../../styles/BitcoinSegment.scss";

function BitcoinSegment() {
  const [listOfCrypto, setListOfCrypto] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    const json = await data.json();
    console.log(Object.values(json.bpi));
    setListOfCrypto(Object.values(json.bpi));
  };
  return (
    <div className="segment__crypto-container">
      <h2 className="segment__crypto-name">Bitcoin</h2>
      <div className="segment__crypto-cards">
      {listOfCrypto.map((item, index) => {
        return <CryptoCard key={`crypto-card-${index}`} item={item} />;
      })}
      </div>
      
    </div>
  );
}

export default BitcoinSegment;
