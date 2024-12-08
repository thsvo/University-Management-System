import { Router } from 'express'
import { userController } from './product.controller'

const productRouter = Router()

productRouter.post('/products', userController.createProduct)
productRouter.get('/products', userController.getProduct)
productRouter.get('/products/:id', userController.getSingle)
productRouter.put('/products/:id', userController.UpdateBook)
productRouter.delete('/products/:id', userController.deleteBook)
export default productRouter
