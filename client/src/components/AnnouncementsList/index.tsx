import { Announcement } from '@/interfaces/announcement.interface'
import Card from '../Card'
import React,{useState, useEffect} from 'react'

type Props = {
  announcements: Announcement[]
  isLoading?: boolean
}

const AnnouncementList = ({ announcements, isLoading }: Props) => {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(announcements);

  const handleSearch = () => {
    const results = announcements.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    setSearchResults(results);
  };

  return (
    <div className='flex justify-center flex-col'>
      {isLoading && 
      <div className='flex justify-center'>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
      }
      <div className='flex gap-6 mb-2'>
        <input type="text" placeholder="Search" className="input input-bordered w-full max-w-xs my-4" onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} />
        <button className="btn btn-primary my-4" onClick={handleSearch}>Buscar</button>
      </div>
      {searchResults && searchResults.map((announcement) => (
        <div className='mb-4' key={`${announcement.id}-${announcement.title}`}>
          <Card title={announcement.title} content={announcement.content} date={announcement.date} height='auto' width='full' link={announcement.link} />
        </div>
      ))}
    </div>
  )
}

export default AnnouncementList