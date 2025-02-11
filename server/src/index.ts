import 'reflect-metadata'
import 'dotenv/config'
import app from "./app/app";
import {AppDataSource} from './db'

const PORT = process.env.PORT;

async function main() {
  try {
    await AppDataSource.initialize();
    console.log(`[database]: Connected succesfully!`)
    app.listen(PORT, () => console.log(`[server]: Running on port ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

main()
