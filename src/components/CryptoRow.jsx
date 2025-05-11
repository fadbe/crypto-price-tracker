import React, { useEffect, useRef, useState } from 'react';
import PriceChangeCell from './PriceChangeCell';
import SparklineChart from './SparklineChart';
import { formatNumber, formatCurrency, formatSupply } from '../utils/formatters';

const CryptoRow = ({ asset }) => {
  const rowRef = useRef(null);
  const [animateUp, setAnimateUp] = useState(false);
  const [animateDown, setAnimateDown] = useState(false);
  const prevPriceRef = useRef(asset.price);
  
  useEffect(() => {
    // Check if price changed to trigger animation
    if (prevPriceRef.current < asset.price) {
      setAnimateUp(true);
      setTimeout(() => setAnimateUp(false), 1000);
    } else if (prevPriceRef.current > asset.price) {
      setAnimateDown(true);
      setTimeout(() => setAnimateDown(false), 1000);
    }
    
    // Update ref with current price for next comparison
    prevPriceRef.current = asset.price;
  }, [asset.price]);

  return (
    <tr 
      ref={rowRef} 
      className={`transition-colors ${animateUp ? 'flash' : ''} ${animateDown ? 'flash-red' : ''}`}
    >
      <td className="table-cell">
        <div className="flex items-center">
          <span className="text-gray-500 dark:text-gray-400 mr-2">{asset.id}</span>
          <div className="flex items-center">
            <img src={asset.logo} alt={asset.name} className="w-8 h-8 mr-3" />
            <div>
              <div className="font-medium">{asset.name}</div>
              <div className="text-gray-500 dark:text-gray-400 text-xs">{asset.symbol}</div>
            </div>
          </div>
        </div>
      </td>
      
      <td className="table-cell">
        <span className={`font-medium ${
          prevPriceRef.current < asset.price ? 'price-up' : 
          prevPriceRef.current > asset.price ? 'price-down' : ''
        }`}>
          {formatCurrency(asset.price)}
        </span>
      </td>
      
      <td className="table-cell">
        <PriceChangeCell value={asset.priceChange1h} />
      </td>
      
      <td className="table-cell">
        <PriceChangeCell value={asset.priceChange24h} />
      </td>
      
      <td className="table-cell">
        <PriceChangeCell value={asset.priceChange7d} />
      </td>
      
      <td className="table-cell">
        {formatCurrency(asset.marketCap)}
      </td>
      
      <td className="table-cell">
        {formatCurrency(asset.volume24h)}
      </td>
      
      <td className="table-cell">
        <div className="flex flex-col">
          <span>{formatSupply(asset.circulatingSupply)} {asset.symbol}</span>
          {asset.maxSupply && (
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {((asset.circulatingSupply / asset.maxSupply) * 100).toFixed(1)}% of max supply
            </span>
          )}
        </div>
      </td>
      
      <td className="table-cell">
        {asset.maxSupply ? formatNumber(asset.maxSupply) : '∞'}
      </td>
      
      <td className="table-cell">
        <div className="chart-container">
          <SparklineChart data={asset.sparklineData} priceChange={asset.priceChange24h} />
        </div>
      </td>
    </tr>
  );
};

export default CryptoRow;