import {DataSource} from 'typeorm'
import 'dotenv/config'
import { Announcement } from '../entities/announcement.entity'

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  logging: false,
  entities: [Announcement],
  subscribers: ['src/migrations/**/*.ts'],
  migrations: ['src/migrations/**/*.ts'],
})