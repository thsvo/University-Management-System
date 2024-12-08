import { IBook } from './book.interface'
import Book from './book.model'

const bookServiceCalculate = async (jload: IBook): Promise<IBook> => {
    const result = await Book.create(jload)
    return result
}

const totalCalRevenue = async () => {
    const result = await Book.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: { $sum: '$totalPrice' },
            },
        },
    ])

    const totalRevenue = result.length > 0 ? result[0].totalRevenue : 0
    return totalRevenue
}

export const bookService = {
    totalCalRevenue,
    bookServiceCalculate,
}
