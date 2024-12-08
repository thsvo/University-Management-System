import { model, Schema } from 'mongoose'
import { IProduct } from './product.interface'
const userSchema = new Schema<IProduct>(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: [true, 'Required'],
            min: [0, 'Price more then 1'],
            validate: {
                validator: (value: number) => value >= 0,
                message: 'Price must be more than or equal to 0',
            },
        },
        category: {
            type: String,
            required: true,
            enum: [
                'Fiction',
                'Science',
                'SelfDevelopment',
                'Poetry',
                'Religious',
            ],
        },
        description: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: [true, 'Required'],
            min: [0, 'quantity more then 1'],
            validate: {
                validator: (value: number) => value >= 0,
                message: 'quantity must be more than or equal to 0',
            },
        },
        inStock: {
            type: Boolean,
            required: true,
        },
    },
    { timestamps: true }
)

const Product = model<IProduct>('User', userSchema)

export default Product
