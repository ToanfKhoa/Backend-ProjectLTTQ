/* eslint-disable no-console */
import express from 'express'
import exitHook from 'async-exit-hook'
import { CONNECT_DB, GET_DB, CLOSE_DB } from '~/config/mongodb'

const START_SERVER = () => {
  const app = express()

  const hostname = 'localhost'
  const port = 8017

  app.get('/', async (req, res) => {
    console.log( await GET_DB().listCollections().toArray())

    res.end('<h1>Hello World!</h1><hr>')
  })
  app.listen(port, hostname, () => {
    console.log(`3. Hello SongDang, I am running at Host: ${hostname} and Port ${port}/`)
  })

  //clean up, dong ket noi mongodb truoc khi dung server
  exitHook(() => {
    console.log('4. Disconnecting from MongoDB Cloud Atlas...')
    CLOSE_DB()
    console.log('5. Disconneted from MongoDB Cloud Atlas')
  })
}

(async () => {
  try {
    console.log('1. Connecting to MongoDB Cloud Atlas...')
    await CONNECT_DB
    console.log('2. Connected to MongoDB Cloud Atlas!')

    START_SERVER()
  }
  catch (error) {
    console.error(error)
    process.exit(0)
  }
})()

// console.log('1. Connecting to MongoDB Cloud Atlas...')
// CONNECT_DB ()
//   .then(() => console.log('2. Connected to MongoDB Cloud Atlas!'))
//   .then(() => START_SERVER())
//   .catch(error => {
//     console.error(error)
//     process.exit(0)
//   })