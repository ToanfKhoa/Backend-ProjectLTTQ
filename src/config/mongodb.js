
import { MongoClient, ServerApiVersion } from 'mongodb'
import { env } from '~/config/environment'
//Khoi tao la null do chua connect
let trelloDatabaseInstance = null

//Khoi tao doi tuong client connect toi mongodb
const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

//Ket noi toi database
export const CONNECT_DB = async () => {
  //Goi ket noi toi mongodb atlas voi URI da khai bao trong than mongoclientinstance
  await mongoClientInstance.connect()

  //Neu ket noi thanh cong thi lay ra database theo ten va gan nguoc lai vao bien trellodatabaseinstance
  trelloDatabaseInstance = mongoClientInstance.db(env.DATABASE_NAME)
}

//Lay ra databaseinstance sau khi da ket noi thanh cong de dung o nhieu noi khac trong code, chi lay duoc neu da ket noi thanh cong
export const GET_DB = () => {
  if (!trelloDatabaseInstance) throw new Error('Must connect to Database first!')
  return trelloDatabaseInstance
}

export const CLOSE_DB = async () => {
  await mongoClientInstance.close()
}

