import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startPriceUpdates, stopPriceUpdates } from './redux/cryptoSlice';
import { selectDarkMode, toggleDarkMode } from './redux/themeSlice';
import CryptoTable from './components/CryptoTable';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(selectDarkMode);

  // Start price updates when component mounts
  useEffect(() => {
    dispatch(startPriceUpdates());
    
    // Clean up the interval when component unmounts
    return () => {
      dispatch(stopPriceUpdates());
    };
  }, [dispatch]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-dark-800 transition-colors duration-300">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Cryptocurrency Prices
          </h1>
          <button
            onClick={() => dispatch(toggleDarkMode())}
            className="px-4 py-2 bg-gray-200 dark:bg-dark-600 rounded-lg flex items-center space-x-2 transition-all"
          >
            <span className="text-sm">
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </span>
            <span className={`inline-block w-5 h-5 rounded-full ${isDarkMode ? 'bg-gray-500' : 'bg-primary-500'}`}></span>
          </button>
        </div>
        
        <div className="bg-white dark:bg-dark-700 rounded-xl shadow-md overflow-hidden transition-all duration-300">
          <CryptoTable />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;