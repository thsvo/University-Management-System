import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function server() {
    try {
        await mongoose.connect(config.databaseurl as string)
    } catch (err) {
        console.log(err)
    }
    app.listen(config.port, () => {
        console.log(`Server is running on port ${config.port}...`)
    })
}

server()
