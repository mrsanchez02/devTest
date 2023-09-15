"use client";
import Card from '@/components/Card'
import ChartHistorical from '@/components/ChartHistorial'
import Layout from '@/components/layout/main'
import { RootState } from '@/redux/store';
import { validateAmount } from '@/utils/validateAmount';
import { useSelector } from 'react-redux';

export default function Home() {
  const exchanges = useSelector((state: RootState) => state.exchange.exchanges);
  const maxPrice = Math.max(...exchanges.map((exchange) => exchange.price))
  const minPrice = Math.min(...exchanges.map((exchange) => exchange.price))

  const percentageChange = ((maxPrice - minPrice) / maxPrice) * 100

  return (
    <Layout>
      <div className="flex flex-col">
        <div className="flex flex-row flex-wrap justify-center">
          <div className="mb-4">
            <h1 className='text-4xl mb-8 ml-4'>Historial Chart</h1>
            <ChartHistorical />
          </div>
          <div className="flex flex-col justify-between mb-4 gap-4">
            <Card title={maxPrice > 0 ? `USD ${validateAmount(`${maxPrice.toFixed(2)}`)}` : '0.00' } content='Highest price' height='20' />
            <Card title={minPrice > 0 ? `USD ${validateAmount(`${minPrice.toFixed(2)}`)}` : '0.00' } content='Lowest price' height='20' />
            <Card title={`${percentageChange ? percentageChange.toFixed(2) : '0.00'} %`} content='Perc. Variation' height='20' />
          </div>
        </div>
      </div>
    </Layout>
  )
}
