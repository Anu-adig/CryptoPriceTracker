
import React from 'react';

const getColor = (val: number) => (val > 0 ? 'text-green-500' : val < 0 ? 'text-red-500' : 'text-gray-500');

export default function CryptoTable({ assets }: { assets: any[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th>#</th><th>Logo</th><th>Name</th><th>Symbol</th><th>Price ($)</th>
            <th>1h %</th><th>24h %</th><th>7d %</th><th>Market Cap</th>
            <th>24h Volume</th><th>Supply</th><th>Max Supply</th><th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((a) => (
            <tr key={a.id} className="border-t text-center">
              <td>{a.id}</td><td>{a.logo}</td><td>{a.name}</td><td>{a.symbol}</td>
              <td>${a.price.toLocaleString()}</td>
              <td className={getColor(a.change1h)}>{a.change1h}%</td>
              <td className={getColor(a.change24h)}>{a.change24h}%</td>
              <td className="text-green-500">{a.change7d}%</td>
              <td>${a.marketCap.toLocaleString()}</td>
              <td>${a.volume24h.toLocaleString()}</td>
              <td>{a.supply}</td><td>{a.maxSupply}</td><td>{a.chart}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
