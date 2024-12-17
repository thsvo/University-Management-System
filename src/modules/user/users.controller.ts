import { RequestHandler } from 'express'
import { userServices } from './user.service'
import httpStatus from 'http-status'
import sendResponse from '../../utils/sendResponse'
import catchAsync from '../../utils/catchAsync'

const createStudent: RequestHandler = catchAsync(async (req, res) => {
    const { password, student: studentData } = req.body
    const result = await userServices.createStudentIntoDB(password, studentData)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Student created successfully',
        data: result,
    })
})
export const UserControllers = {
    createStudent,
}
