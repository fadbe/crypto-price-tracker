import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useSelector } from 'react-redux';
import { selectDarkMode } from '../redux/themeSlice';

const SparklineChart = ({ data, priceChange }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const isDarkMode = useSelector(selectDarkMode);
  
  // Determine color based on 24h price change
  const isPositive = priceChange >= 0;
  const lineColor = isPositive ? '#00C07B' : '#F82D45';
  const gradientTopColor = isPositive ? 'rgba(0, 192, 123, 0.2)' : 'rgba(248, 45, 69, 0.2)';
  const gradientBottomColor = isPositive ? 'rgba(0, 192, 123, 0)' : 'rgba(248, 45, 69, 0)';

  useEffect(() => {
    if (chartRef.current) {
      // Destroy previous chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      
      const ctx = chartRef.current.getContext('2d');
      
      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, 60);
      gradient.addColorStop(0, gradientTopColor);
      gradient.addColorStop(1, gradientBottomColor);
      
      // Create new chart
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: Array(data.length).fill(''),
          datasets: [{
            data: data,
            borderColor: lineColor,
            borderWidth: 2,
            pointRadius: 0,
            tension: 0.1,
            fill: true,
            backgroundColor: gradient
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              enabled: false
            }
          },
          scales: {
            x: {
              display: false,
              grid: {
                display: false
              }
            },
            y: {
              display: false,
              min: Math.min(...data) * 0.998,
              max: Math.max(...data) * 1.002,
              grid: {
                display: false
              }
            }
          },
          interaction: {
            intersect: false,
            mode: 'index'
          },
          animation: {
            duration: 0
          }
        }
      });
    }
    
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, priceChange, gradientTopColor, gradientBottomColor, lineColor, isDarkMode]);

  return (
    <canvas ref={chartRef} height="40"></canvas>
  );
};

export default SparklineChart;