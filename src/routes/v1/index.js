import express from 'express'
import { StatusCodes } from 'http-status-codes'

const router = express.Router()

router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json( { massage: 'APIs V1 are ready to use', code: StatusCodes.OK })
})

export const APIs_V1 = router