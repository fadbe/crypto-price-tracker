// Format large numbers with appropriate suffixes (K, M, B, T)
export const formatNumber = (num) => {
  if (num === null || num === undefined) return '∞';
  
  if (num >= 1000000000000) {
    return (num / 1000000000000).toFixed(2) + 'T';
  }
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(2) + 'B';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(2) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(2) + 'K';
  }
  return num.toFixed(2);
};

// Format currency with $ symbol and appropriate formatting
export const formatCurrency = (amount) => {
  if (amount === null || amount === undefined) return '$0.00';
  
  // For very large amounts
  if (amount >= 1000000000000) {
    return '$' + (amount / 1000000000000).toFixed(2) + 'T';
  }
  if (amount >= 1000000000) {
    return '$' + (amount / 1000000000).toFixed(2) + 'B';
  }
  if (amount >= 1000000) {
    return '$' + (amount / 1000000).toFixed(2) + 'M';
  }
  if (amount >= 1000) {
    return '$' + (amount / 1000).toFixed(2) + 'K';
  }
  
  // For amounts less than 1, use more decimal places
  if (amount < 1) {
    return '$' + amount.toFixed(6);
  }
  
  // For regular amounts
  return '$' + amount.toFixed(2);
};

// Format supply numbers with appropriate formatting
export const formatSupply = (supply) => {
  if (supply === null || supply === undefined) return '0';
  
  if (supply >= 1000000000) {
    return (supply / 1000000000).toFixed(2) + 'B';
  }
  if (supply >= 1000000) {
    return (supply / 1000000).toFixed(2) + 'M';
  }
  if (supply >= 1000) {
    return (supply / 1000).toFixed(2) + 'K';
  }
  return supply.toFixed(0);
};