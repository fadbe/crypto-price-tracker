import React from 'react';
import { Github, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark-700 border-t border-gray-200 dark:border-dark-600 py-6 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2025 Crypto Price Tracker. All data is simulated for demonstration purposes.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="#" 
              className="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
            >
              <Globe size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;