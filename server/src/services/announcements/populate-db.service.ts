import { Announcement } from "../../entities/announcement.entity";
import 'dotenv/config'
import createOneService from "./create-one.service";
import config from "../../config";

const ANNOUNCEMENTS_API = config.api.url

export default async () => {
  try {
    await Announcement.clear()
    const res = await fetch(ANNOUNCEMENTS_API);
    if (!res.ok) {
        throw new Error(`Failed to fetch data from https://www.bitmex.com/api/v1/announcement`);
    }

    const announcements: Announcement[] = await res.json();

    for (const announcement of announcements) {
      await createOneService(announcement)
    }
    
    return {
      information: {
        message: 'Successfully.'
      }
    }
} catch (error) {
  console.log(error)
    return {
      error: {
        message: 'Service error.'
      }
    }
}

}