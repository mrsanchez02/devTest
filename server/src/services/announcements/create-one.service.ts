import { Announcement } from "../../entities/announcement.entity";

export default async (announcement: Announcement) => {
  try {
    const AnnouncementItem = Announcement.create(announcement);
    await Announcement.save(AnnouncementItem);
    return { AnnouncementItem };
  } catch (error) {
    console.log(error)
    return {
      error: {
        message: 'Service error.'
      }
    }

  }
}
