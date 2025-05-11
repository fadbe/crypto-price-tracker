# 💹 Real-Time Crypto Price Tracker

A responsive React + Redux Toolkit web application that displays simulated real-time cryptocurrency data, similar to platforms like CoinMarketCap. Built for learning and demonstration purposes.

![Crypto Price Tracker Demo](https://i.imgur.com/JQZ5Pmw.png)

## 🚀 Features

- 💰 **Live Price Updates** (mocked using `setInterval` every 1–2 seconds)
- 📊 **Detailed Data Table**: Price, % change (1h/24h/7d), market cap, volume, supply
- 📈 **7-Day Chart** (static image or SVG)
- 🎨 **Color Coding**: Green for gains, red for losses
- 🌙 **Light/Dark Mode** toggle with persistence
- 🔍 **Sorting & Filtering** (e.g., top gainers, losers)
- 📱 **Fully Responsive Design**

## 🛠️ Tech Stack

- **React 18 + Vite**
- **Redux Toolkit** (`createSlice`, `configureStore`)
- **Tailwind CSS** (for modern styling)
- **Chart.js** via `react-chartjs-2`
- **Lucide-react** for icons

## 📁 Folder Structure

crypto-price-tracker/
├── src/
│ ├── assets/ # Crypto data and icons
│ ├── components/ # Table, Header, Filter, Toggle, etc.
│ ├── redux/ # Store & cryptoSlice
│ ├── utils/ # Formatters for currency and numbers
│ └── App.jsx # Main entry
├── public/ # Static assets
├── README.md
└── vite.config.js

📝 License
This project is licensed under the MIT License — feel free to use and modify for learning or demonstration.

🔗 Live Link
View Live Site
