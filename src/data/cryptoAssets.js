export const initialCryptoData = [
  {
    id: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
    price: 43250.75,
    priceChange1h: 0.45,
    priceChange24h: 2.30,
    priceChange7d: -1.25,
    marketCap: 837582930000,
    volume24h: 23500670000,
    circulatingSupply: 19375000,
    maxSupply: 21000000,
    sparklineData: [42100, 42500, 43000, 42800, 43100, 43250]
  },
  {
    id: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    price: 3276.48,
    priceChange1h: -0.12,
    priceChange24h: 1.72,
    priceChange7d: 5.33,
    marketCap: 394256890000,
    volume24h: 15670890000,
    circulatingSupply: 120250000,
    maxSupply: null,
    sparklineData: [3210, 3250, 3275, 3260, 3270, 3276]
  },
  {
    id: 3,
    name: 'Tether',
    symbol: 'USDT',
    logo: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
    price: 1.00,
    priceChange1h: 0.01,
    priceChange24h: 0.05,
    priceChange7d: -0.02,
    marketCap: 83426000000,
    volume24h: 46789000000,
    circulatingSupply: 83426000000,
    maxSupply: null,
    sparklineData: [1.00, 1.00, 0.999, 1.001, 1.00, 1.00]
  },
  {
    id: 4,
    name: 'Cardano',
    symbol: 'ADA',
    logo: 'https://cryptologos.cc/logos/cardano-ada-logo.png',
    price: 0.58,
    priceChange1h: 0.23,
    priceChange24h: -1.45,
    priceChange7d: 3.76,
    marketCap: 20365200000,
    volume24h: 875690000,
    circulatingSupply: 35112800000,
    maxSupply: 45000000000,
    sparklineData: [0.57, 0.575, 0.58, 0.582, 0.579, 0.58]
  },
  {
    id: 5,
    name: 'Solana',
    symbol: 'SOL',
    logo: 'https://cryptologos.cc/logos/solana-sol-logo.png',
    price: 128.93,
    priceChange1h: 1.35,
    priceChange24h: 4.58,
    priceChange7d: -2.12,
    marketCap: 53687000000,
    volume24h: 2175000000,
    circulatingSupply: 415750000,
    maxSupply: null,
    sparklineData: [125.1, 126.7, 127.3, 128.5, 129.0, 128.93]
  }
];

// Utility functions for generating random price updates
export const generateRandomPriceChange = (baseChange = 0, volatility = 0.5) => {
  return baseChange + (Math.random() * 2 - 1) * volatility;
};

export const generateRandomVolume = (baseVolume, volatilityPercentage = 5) => {
  const volatility = (baseVolume * volatilityPercentage) / 100;
  return baseVolume + (Math.random() * 2 - 1) * volatility;
};