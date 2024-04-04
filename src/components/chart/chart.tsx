import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

const LineChart = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: '2023',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          tension: 0.4
        },
        {
          label: '2024',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--green-500'),
          tension: 0.4
        }
      ]
    };
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: '#999999'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#999999'
          },
          grid: {
            color: surfaceBorder
          }
        },
        y: {
          ticks: {
            color: '#999999'
          },
          grid: {
            color: surfaceBorder
          }
        }
      }
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="card">
      <div className='pb-5 dark:text-white'>Compare your expenses</div>
      <Chart className='bg-white dark:bg-article-background-dark' type="line" data={chartData} options={chartOptions}/>
    </div>
  );
};

export default LineChart;
