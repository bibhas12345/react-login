import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const ActivitiesCard = () => {
  const [chart, setChart] = useState(null);
  const [month, setMonth] = useState('January');
  const [year, setYear] = useState(2022);

  useEffect(() => {
    // data for the line chart
    const data = {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [
        {
          label: 'Guests',
          data: [100, 200, 100, 400],
          fill: false,
          borderColor: '#FF6384',
          tension: 0.1,
        },
        {
          label: 'Users',
          data: [200, 500, 400, 500],
          fill: false,
          borderColor: '#36A2EB',
          tension: 0.1,
        },
      ],
    };

    // options for the line chart
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              stepSize: 100,
            },
          },
        ],
      },
    };

    // create the chart
    const ctx = document.getElementById('activities-chart').getContext('2d');
    const newChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options,
    });

    // set the chart state
    setChart(newChart);

    // cleanup function to destroy the chart when the component unmounts
    return () => {
      newChart.destroy();
    };
  }, []);

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <div className="activities-card card" style={{ height: '20rem', width: '80rem', marginLeft: '25rem' , marginTop:"1rem"}}>
      <div className="activities-card-header w-[50px]" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>Activities</h2>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <select value={month} onChange={handleMonthChange}>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
          <input type="number" value={year} onChange={handleYearChange} />
        </div>
      </div>
      <canvas id="activities-chart" style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default ActivitiesCard;