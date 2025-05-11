import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllAssets } from '../redux/cryptoSlice';
import { setSortField, setFilterType, selectSortField, selectSortDirection, selectFilterType } from '../redux/filterSlice';
import CryptoRow from './CryptoRow';
import TableHeader from './TableHeader';
import FilterButtons from './FilterButtons';

const CryptoTable = () => {
  const dispatch = useDispatch();
  const assets = useSelector(selectAllAssets);
  const sortField = useSelector(selectSortField);
  const sortDirection = useSelector(selectSortDirection);
  const filterType = useSelector(selectFilterType);

  // Filter the assets based on filterType
  const filteredAssets = useMemo(() => {
    if (filterType === 'gainers') {
      return assets.filter(asset => asset.priceChange24h > 0);
    } else if (filterType === 'losers') {
      return assets.filter(asset => asset.priceChange24h < 0);
    }
    return assets;
  }, [assets, filterType]);

  // Sort the filtered assets
  const sortedAssets = useMemo(() => {
    return [...filteredAssets].sort((a, b) => {
      let aValue = a[sortField];
      let bValue = b[sortField];
      
      // Handle null values in sorting
      if (aValue === null) return sortDirection === 'asc' ? -1 : 1;
      if (bValue === null) return sortDirection === 'asc' ? 1 : -1;
      
      // Sort direction
      if (sortDirection === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  }, [filteredAssets, sortField, sortDirection]);

  const handleSort = (field) => {
    dispatch(setSortField(field));
  };

  const handleFilterChange = (filterType) => {
    dispatch(setFilterType(filterType));
  };

  return (
    <div>
      <div className="px-4 py-3 border-b border-gray-200 dark:border-dark-600">
        <FilterButtons 
          activeFilter={filterType} 
          onFilterChange={handleFilterChange} 
        />
      </div>

      <div className="table-responsive">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-dark-600">
          <TableHeader onSort={handleSort} currentSort={sortField} sortDirection={sortDirection} />
          <tbody className="bg-white dark:bg-dark-700 divide-y divide-gray-200 dark:divide-dark-600">
            {sortedAssets.map((asset) => (
              <CryptoRow key={asset.id} asset={asset} />
            ))}
          </tbody>
        </table>
      </div>

      {sortedAssets.length === 0 && (
        <div className="py-12 text-center text-gray-500 dark:text-gray-400">
          No cryptocurrencies match the current filter.
        </div>
      )}
    </div>
  );
};

export default CryptoTable;