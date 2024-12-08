import { IProduct } from './product.interface'
import User from './product.model'

const createProduct = async (jload: IProduct): Promise<IProduct> => {
    const result = await User.create(jload)
    return result
}

const getProduct = async (find: object) => {
    const users = await User.find(find)
    return users
}

const getSingleProduct = async (id: string) => {
    const result = await User.findById(id)
    return result
}

const getUpdateProduct = async (id: string, data: IProduct) => {
    const result = await User.findByIdAndUpdate(id, data, {
        new: true,
    })
    return result
}

const getDeleteProduct = async (id: string) => {
    const result = await User.findByIdAndDelete(id)
    return result
}

export const userService = {
    createProduct,
    getProduct,
    getSingleProduct,
    getUpdateProduct,
    getDeleteProduct,
}
