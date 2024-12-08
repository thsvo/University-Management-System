import { Router } from 'express'
import { orderController } from './book.controller'

const bookRouter = Router()
bookRouter.post('/orders', orderController.createBook)
bookRouter.get('/orders/revenue', orderController.totalrevenuecalculate)

export default bookRouter
