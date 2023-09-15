"use client";
import AnnouncementList from '@/components/AnnouncementsList';
import Layout from '@/components/layout/announcements';
import { useGetAnnouncementQuery } from '@/redux/rtk/announcements';

const AnnouncementsPage = () => {
  const {data, isLoading} = useGetAnnouncementQuery()
  
  return (
    <Layout>
      <div className="flex flex-col">
        <h1 className='text-4xl mb-8'>Important announcements</h1>
        {
          isLoading ? 
          <div className="loading loading-infinity loading-lg text-center"></div> :
          <AnnouncementList announcements={data||[]} />
        }
      </div>
    </Layout>
  )
}

export default AnnouncementsPage