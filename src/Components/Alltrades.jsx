import { DATA_TRADES } from '../datatrades';

export default function Alltrades() {
  return (
    <>
      <h2>Actual Trades</h2>
      <table className="trades-table">
        <thead>
          <tr>
            <th>Instrument</th>
            <th>Pattern</th>
            <th>Volum</th>
            <th>Entry-price</th>
          </tr>
        </thead>
        <tbody>
          {DATA_TRADES.map((trade, index) => {
            return (
              <tr key={index}>
                <td>{trade.instrument}</td>
                <td>{trade.pattern}</td>
                <td>{trade.volum}</td>
                <td>{trade.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
