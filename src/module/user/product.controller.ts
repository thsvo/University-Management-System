import { Request, Response } from 'express'
import { userService } from './product.services'

const createProduct = async (req: Request, res: Response) => {
    try {
        const jload = req.body

        const result = await userService.createProduct(jload)
        res.json({
            success: true,
            message: 'User created successfully',
            data: result,
        })
    } catch (error) {
        res.json({
            success: false,
            massage: 'validation error',
            error,
        })
    }
}

const getProduct = async (req: Request, res: Response) => {
    try {
        const { find } = req.query
        let query = {}

        if (find) {
            query = {
                $or: [
                    { name: { $regex: find, $options: 'i' } },
                    { brand: { $regex: find, $options: 'i' } },
                    { category: { $regex: find, $options: 'i' } },
                ],
            }
        }
        const result = await userService.getProduct(query)
        res.json({
            success: true,
            message: 'User fetched successfully',
            data: result,
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Error fetching user',
            error,
        })
    }
}

const getSingle = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id
        const result = await userService.getSingleProduct(userId)

        res.json({
            success: true,
            message: 'Book retrieved successfully',
            data: result,
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Error fetching user',
            error,
        })
    }
}

const UpdateBook = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id
        const body = req.body
        const result = await userService.getUpdateProduct(userId, body)
        res.json({
            success: true,
            message: 'User updated successfully',
            data: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: 'Error updating user',
            error,
        })
    }
}

const deleteBook = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id
        const result = await userService.getDeleteProduct(userId)
        res.json({
            success: true,
            message: 'User deleted successfully',
            data: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: 'Error deleting user',
            error,
        })
    }
}

export const userController = {
    createProduct,
    getProduct,
    getSingle,
    UpdateBook,
    deleteBook,
}
