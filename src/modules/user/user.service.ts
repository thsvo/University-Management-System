import { Tuser } from './user.interface'
import User from './user.model'
import config from './../../config'
import { TStudent } from '../student/student.interface'
import { Student } from '../student/student.model'

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
    // create new user object
    const userData: Partial<Tuser> = {}

    // if password is not provided, generate a random password

    userData.password = password || (config.default_password as string)

    // if (!password) {
    //     user.password = config.default_password as string
    // } else {
    // }

    //set student role

    userData.role = 'student'

    //set manually generated unique id

    userData.id = '51515515415'

    // create a user

    const NewUser = await User.create(userData)
    //create a student
    if (Object.keys(NewUser).length) {
        // set id, _id as user
        studentData.id = NewUser.id
        studentData.user = NewUser._id

        const newStudent = await Student.create(studentData)
        return newStudent
    }

    return NewUser
}

export const userServices = {
    createStudentIntoDB,
}
