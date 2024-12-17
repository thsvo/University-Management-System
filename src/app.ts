import express, { Application, Request, Response } from 'express'
import { StudentRoutes } from './modules/student/student.route'
import cors from 'cors'
import { userRouter } from './modules/user/user.router'

const app: Application = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/students', StudentRoutes)
app.use('/api/v1/users', userRouter)
app.get('/', (req: Request, res: Response) => {
    res.send({
        message: 'Welcome to my API!',
        version: '1.0.0',
        status: 'success',
    })
})

export default app
