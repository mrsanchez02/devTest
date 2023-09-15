import { Request, Response } from 'express'
import getAllService from '../services/announcements/get-all.service'
import populateDbService from '../services/announcements/populate-db.service'

export const PopulateDatabase = async (_: Request, res: Response) => {
  try {
    const populate = await populateDbService()
    res.json(populate)

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: { message: 'Application error' } })

  }

}

export const GetAllAnnouncements = async (_: Request, res: Response) => {
  try {
    const allAnnouncements = await getAllService()
    res.json(allAnnouncements)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: { message: 'Application error' } })

  }
}
