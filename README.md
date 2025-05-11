# Real-Time Crypto Price Tracker

A responsive React + Redux Toolkit web application that displays real-time cryptocurrency data with simulated live updates.

![Crypto Price Tracker Screenshot](https://i.imgur.com/JQZ5Pmw.png)

## Features

- Real-time cryptocurrency data table with simulated price updates every 1-2 seconds
- Complete data display including price, percentage changes, market cap, volume, and supply metrics
- Redux Toolkit state management with proper slices and selectors
- Responsive table design that works on all screen sizes
- Color-coded price changes (green for positive, red for negative)
- Sorting functionality for all table columns
- Filtering options (All, Gainers, Losers)
- Light and dark mode toggle with persistent preference

## Tech Stack

- React 18
- Redux Toolkit (createSlice, configureStore)
- Chart.js with react-chartjs-2 for sparkline charts
- Tailwind CSS for styling
- Lucide React for icons

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser at http://localhost:5173

## Project Structure

- `src/data/` - Sample crypto asset data
- `src/redux/` - Redux store setup and slices
- `src/components/` - UI components
- `src/utils/` - Utility functions for formatting data

## Implementation Details

- Uses `setInterval` to simulate real-time data updates
- Manages all state with Redux Toolkit
- Implements responsive design for all device sizes
- Features subtle animations for price changes

## License

MIT