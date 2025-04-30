import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ComicChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Claims Filed',
        data: [5, 10, 3, 8, 6],
        backgroundColor: '#FF3833',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Claims Over Time (Comic Style)' },
      tooltip: { mode: 'index', intersect: false },
    },
    interaction: { mode: 'nearest', axis: 'x', intersect: false },
  };

  return (
    <div>
      <h2 className="comic-heading mb-4">Claims Data 📊</h2>
      <Bar data={data} options={options} />
    </div>
  );
}

export default ComicChart;
