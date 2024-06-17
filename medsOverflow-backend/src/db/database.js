import mongoose from "mongoose"
import { DATABASE_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const dbInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DATABASE_NAME}`)
        console.log(dbInstance.connection.host);
    } catch (error) {
        console.log("Connection failed while connecting", error);
    }
}

export {connectDB}