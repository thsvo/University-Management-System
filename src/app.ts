import express, { Request, Response } from 'express'
import productRouter from './module/user/product.router'
import bookRouter from './module/book/book.route'

const app = express()

app.use(express.json())

app.use('/api', productRouter)
app.use('/api', bookRouter)


app.get('/', (req: Request, res: Response) => {
    res.send({
        message: 'Welcome to my API!',
        version: '1.0.0',
        status: 'success',
    })
})

export default app
