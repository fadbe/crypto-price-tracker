import React from 'react';
import { ArrowUpDown, ArrowDown, ArrowUp } from 'lucide-react';

const TableHeader = ({ onSort, currentSort, sortDirection }) => {
  const renderSortIcon = (field) => {
    if (currentSort !== field) {
      return <ArrowUpDown size={14} className="ml-1" />;
    }
    return sortDirection === 'asc' ? 
      <ArrowUp size={14} className="ml-1 text-primary-500" /> : 
      <ArrowDown size={14} className="ml-1 text-primary-500" />;
  };

  return (
    <thead className="bg-gray-50 dark:bg-dark-600">
      <tr>
        <th 
          className="table-header"
          onClick={() => onSort('id')}
        >
          <div className="flex items-center">
            <span># / Name</span>
            {renderSortIcon('id')}
          </div>
        </th>
        <th 
          className="table-header"
          onClick={() => onSort('price')}
        >
          <div className="flex items-center">
            <span>Price</span>
            {renderSortIcon('price')}
          </div>
        </th>
        <th 
          className="table-header"
          onClick={() => onSort('priceChange1h')}
        >
          <div className="flex items-center">
            <span>1h %</span>
            {renderSortIcon('priceChange1h')}
          </div>
        </th>
        <th 
          className="table-header"
          onClick={() => onSort('priceChange24h')}
        >
          <div className="flex items-center">
            <span>24h %</span>
            {renderSortIcon('priceChange24h')}
          </div>
        </th>
        <th 
          className="table-header"
          onClick={() => onSort('priceChange7d')}
        >
          <div className="flex items-center">
            <span>7d %</span>
            {renderSortIcon('priceChange7d')}
          </div>
        </th>
        <th 
          className="table-header"
          onClick={() => onSort('marketCap')}
        >
          <div className="flex items-center">
            <span>Market Cap</span>
            {renderSortIcon('marketCap')}
          </div>
        </th>
        <th 
          className="table-header"
          onClick={() => onSort('volume24h')}
        >
          <div className="flex items-center">
            <span>24h Volume</span>
            {renderSortIcon('volume24h')}
          </div>
        </th>
        <th 
          className="table-header"
          onClick={() => onSort('circulatingSupply')}
        >
          <div className="flex items-center">
            <span>Circulating Supply</span>
            {renderSortIcon('circulatingSupply')}
          </div>
        </th>
        <th 
          className="table-header"
          onClick={() => onSort('maxSupply')}
        >
          <div className="flex items-center">
            <span>Max Supply</span>
            {renderSortIcon('maxSupply')}
          </div>
        </th>
        <th className="table-header">
          <span>Last 7d</span>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;