import { DATA_TRADES } from '../datatrades';

export default function Details() {
  return (
    <>
      <h2>Trades Details</h2>
      <div className="alltrades-container">
        {DATA_TRADES.map((trade, index) => {
          return (
            <div className="trade-container">
              <div className="trade-details">
                <ol key={index}>
                  <li>Instrument - {trade.instrument}</li>
                  <li>Pattern - {trade.pattern}</li>
                  <li>Volume - {trade.volum}</li>
                  <li>Entryprice - {trade.price}</li>
                </ol>
              </div>
              <div>
                <img src={trade.image} alt="Trade pattern" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
