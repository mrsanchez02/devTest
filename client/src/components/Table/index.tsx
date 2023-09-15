'use client'
import { ExchangeData } from '@/interfaces/socket.interface'

type Props = {
  data: ExchangeData[]
}

const Table = ({data}: Props) => {
  return (
    <div>
      <div className="overflow-x-auto bg-base-100 rounded-md text-success w-[50rem] h-96">
        <table className="table">
          <thead className='text-success'>
            <tr>
              <th className='font-bold'>Id</th>
              <th className='font-bold'>Symbol</th>
              <th className='font-bold'>Side</th>
              <th className='font-bold'>Price</th>
              <th className='font-bold'>Time</th>
            </tr>
          </thead>
          <tbody>
            {data&&data.map((log) => (
            <tr className="hover" key={log.id}>
              <th>{log.id}</th>
              <td>{log.symbol}</td>
              <td>{log.side}</td>
              <td>{log.price.toFixed(2)}</td>
              <td>{new Date(log.timestamp).toLocaleString()}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table