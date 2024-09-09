
import React, { useState, useEffect } from 'react';


function TradingInfo() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5050/')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Symbol</th>
            <th>Transaction</th>
            <th>Price</th>
            <th>Market</th>
          </tr>
        </thead>
        <tbody>
        {data.map(item => (
          <tr key={item.Timestamp}>
            <td>{item.Timestamp}</td>
            <td>{item.Symbol}</td>
            <td>{item.Transaction}</td>
            <td>{item.Price}</td>
            <td>{item.Market}</td>
          </tr>
        ))}
        </tbody>

      </table>
    </div>
  );
}

export default TradingInfo;