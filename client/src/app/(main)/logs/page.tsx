"use client";
import Table from '@/components/Table';
import Layout from '@/components/layout/main';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

const ExchangeLogs = () => {
  const { exchanges } = useSelector((state: RootState) => state.exchange);

  return (
    <Layout>
      <div>
        <h1 className='text-4xl mb-8'>Exchange Logs</h1>
        <Table data={exchanges} />
      </div>
    </Layout>
  )
}

export default ExchangeLogs