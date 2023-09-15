import { Router } from 'express'
import { GetAllAnnouncements, PopulateDatabase } from '../../controllers/announcement.controllers'

const router = Router()

router.get('/', GetAllAnnouncements)
router.post('/', PopulateDatabase)

export default router