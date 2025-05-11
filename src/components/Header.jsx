import React from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Wallet } from 'lucide-react';
import { selectLastUpdated } from '../redux/cryptoSlice';

const Header = () => {
  const lastUpdated = useSelector(selectLastUpdated);
  
  // Format the last updated time
  const formattedTime = new Date(lastUpdated).toLocaleTimeString();
  
  return (
    <header className="bg-white dark:bg-dark-700 border-b border-gray-200 dark:border-dark-600 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          <BarChart size={32} className="text-primary-500 mr-2" />
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Real-Time Crypto Price Tracker
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
            <Wallet size={18} className="mr-1 text-gray-400 dark:text-gray-500" />
            <div>
              <span className="font-medium">Last updated: </span>
              <span>{formattedTime}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;