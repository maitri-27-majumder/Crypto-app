import "../../styles/CryptoCard.scss";

const CryptoCard = ({ item }) => {
  return (
    <div className="card__container">
      <div className="card__crypto-conversion-title">
        <div className="card__crypto-conversion-logo-container">
          <div
            className="card__crypto-conversion-logo"
            dangerouslySetInnerHTML={{ __html: item?.symbol }}
          />
        </div>
        <div className="card__crypto-conversion-code">{item?.code}</div>
      </div>
      <div className="card__crypto-conversion-description">{item?.description}</div>
      <div className="card__crypto-conversion-rate-container">
        <div className="card__crypto-conversion-container-item">
          <div>Rate</div>
          <div>{item?.rate}</div>
        </div>
        <div className="card__crypto-conversion-container-item">
          <div>Float</div>
          <div>{item?.rate_float}</div>
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;
