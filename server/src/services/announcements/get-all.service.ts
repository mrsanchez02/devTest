import {Announcement} from '../../entities/announcement.entity'

export default async () => {
  try {
    const announcement = await Announcement.find()
    return announcement
  } catch (error) {
    console.log(error)
    return {
      error: {
        message: 'Service error.'
      }
    }
  }
}