import express, { NextFunction, Request, Response } from 'express'
import { UserControllers } from './users.controller'

const router = express.Router()

const shenaBahini = (name) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        console.log(`im here ${name}`)

        //validation logic here
        next()
    }
}

router.post('/create-student', shenaBahini('data here'), UserControllers.createStudent)

export const userRouter = router
