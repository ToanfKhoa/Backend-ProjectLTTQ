import express, { Router } from 'express'
import { StatusCodes } from 'http-status-codes'

const Router = express.Router()

Router.route('/')
  .get((req,res) => {
    res.status(StatusCodes.OK).json( { massage: 'GET: API get list board'})
  })
  .post((req,res) => { //method nay dung de tao ban ghi moi
    res.status(StatusCodes.CREATED).json( { massage: 'POST: API create new board'})
  })  //co the nhan vao go to defination cua OK,CREATED de xem chi tiet cac ma

export const boardRoutes = Router

