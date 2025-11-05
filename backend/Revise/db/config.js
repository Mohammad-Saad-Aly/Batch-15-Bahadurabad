import mongoose from "mongoose";
import 'dotenv/config'

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.riuzj9e.mongodb.net/${process.env.DB_NAME}?appName=Cluster1`

async function connectDB() {
    try {
        await mongoose.connect(url)
        console.log('database connected')
    }
    catch (err) {
        console.log(err)
    }
}

export default connectDB;