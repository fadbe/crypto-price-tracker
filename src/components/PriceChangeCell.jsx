import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

const PriceChangeCell = ({ value }) => {
  const isPositive = value > 0;
  const isNeutral = value === 0;
  
  const colorClass = isPositive 
    ? 'price-up' 
    : isNeutral 
      ? 'text-gray-500 dark:text-gray-400' 
      : 'price-down';

  const iconClass = `${isPositive ? 'price-up' : 'price-down'} mr-1`;
  
  return (
    <div className={`flex items-center ${colorClass}`}>
      {!isNeutral && (
        isPositive 
          ? <ArrowUp size={14} className={iconClass} /> 
          : <ArrowDown size={14} className={iconClass} />
      )}
      <span>{Math.abs(value).toFixed(2)}%</span>
    </div>
  );
};

export default PriceChangeCell;