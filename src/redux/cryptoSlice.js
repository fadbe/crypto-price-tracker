import { createSlice } from '@reduxjs/toolkit';
import { initialCryptoData, generateRandomPriceChange, generateRandomVolume } from '../data/cryptoAssets';

let updateInterval = null;

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    assets: initialCryptoData,
    lastUpdated: new Date().toISOString(),
    loading: false,
    error: null
  },
  reducers: {
    updatePrices: (state) => {
      // Update each asset's price and other fluctuating metrics
      state.assets = state.assets.map(asset => {
        // Generate random price change percentage for this update (smaller for stable coins)
        const isStableCoin = asset.symbol === 'USDT';
        const volatility = isStableCoin ? 0.01 : 0.5;
        const priceChangePercent = generateRandomPriceChange(0, volatility);
        
        // Calculate new price based on percentage change
        const priceChangeAmount = asset.price * (priceChangePercent / 100);
        const newPrice = asset.price + priceChangeAmount;
        
        // Update hourly percentage change with some randomness
        const newHourChange = asset.priceChange1h + generateRandomPriceChange(0, 0.3);
        
        // Update daily percentage change with some randomness
        const newDayChange = asset.priceChange24h + generateRandomPriceChange(0, 0.2);
        
        // Update weekly percentage change with some randomness
        const newWeekChange = asset.priceChange7d + generateRandomPriceChange(0, 0.1);
        
        // Update 24h volume with some randomness
        const newVolume = generateRandomVolume(asset.volume24h);
        
        // Update sparkline data with new price point
        const newSparklineData = [...asset.sparklineData.slice(1), newPrice];

        return {
          ...asset,
          price: Number(newPrice.toFixed(2)),
          priceChange1h: Number(newHourChange.toFixed(2)),
          priceChange24h: Number(newDayChange.toFixed(2)),
          priceChange7d: Number(newWeekChange.toFixed(2)),
          volume24h: Math.round(newVolume),
          sparklineData: newSparklineData,
          previousPrice: asset.price // Store previous price for animation
        };
      });
      
      // Update the lastUpdated timestamp
      state.lastUpdated = new Date().toISOString();
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { updatePrices, setLoading, setError } = cryptoSlice.actions;

// Thunks
export const startPriceUpdates = () => (dispatch) => {
  // Clear any existing interval
  if (updateInterval) {
    clearInterval(updateInterval);
  }
  
  // Set up new interval to update prices every 1-2 seconds
  updateInterval = setInterval(() => {
    dispatch(updatePrices());
  }, 1000 + Math.random() * 1000); // Random interval between 1-2 seconds
};

export const stopPriceUpdates = () => () => {
  if (updateInterval) {
    clearInterval(updateInterval);
    updateInterval = null;
  }
};

// Selectors
export const selectAllAssets = (state) => state.crypto.assets;
export const selectAssetById = (state, id) => 
  state.crypto.assets.find(asset => asset.id === id);
export const selectLastUpdated = (state) => state.crypto.lastUpdated;
export const selectLoading = (state) => state.crypto.loading;
export const selectError = (state) => state.crypto.error;

export default cryptoSlice.reducer;