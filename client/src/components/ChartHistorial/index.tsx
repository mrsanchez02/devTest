'use client';

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import React from 'react'
import { faker } from '@faker-js/faker';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
  },
};

const ChartHistorical = () => {
  const exchanges = useSelector((state: RootState) => state.exchange.exchanges);

  const data = {
    labels: exchanges.map((ex) => new Date(ex.timestamp).toLocaleTimeString()).slice(-7),
    datasets: [
      {
        label: 'XBTUSD',
        data: exchanges.map((ex) => ex.price),
        borderColor: 'rgb(29, 185, 144)',
        backgroundColor: 'rgba(29, 185, 144, 0.5)',
      },
    ],
  };

  return (
    <div className='w-[45rem]'>
      <div className="card w-auto bg-base-100 shadow-xl mx-4">
        <div className="card-body">
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  )
}

export default ChartHistorical
