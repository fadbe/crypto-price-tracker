import React from 'react';

const FilterButtons = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="flex space-x-2">
      <button
        onClick={() => onFilterChange('all')}
        className={`pill ${
          activeFilter === 'all'
            ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300'
            : 'bg-gray-100 text-gray-800 dark:bg-dark-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-500'
        }`}
      >
        All
      </button>
      
      <button
        onClick={() => onFilterChange('gainers')}
        className={`pill ${
          activeFilter === 'gainers'
            ? 'bg-success-500/20 text-success-500 dark:bg-success-500/30'
            : 'bg-gray-100 text-gray-800 dark:bg-dark-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-500'
        }`}
      >
        Gainers
      </button>
      
      <button
        onClick={() => onFilterChange('losers')}
        className={`pill ${
          activeFilter === 'losers'
            ? 'bg-danger-500/20 text-danger-500 dark:bg-danger-500/30'
            : 'bg-gray-100 text-gray-800 dark:bg-dark-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-500'
        }`}
      >
        Losers
      </button>
    </div>
  );
};

export default FilterButtons;