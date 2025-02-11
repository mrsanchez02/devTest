import express from 'express'
import morgan from 'morgan'
import cors from 'cors';
import AnnouncementRoutes from '../routes/announcements/announcement.routes'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use('/api/announcement/', AnnouncementRoutes)

export default app
