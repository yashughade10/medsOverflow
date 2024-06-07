import express from "express"
import cors from "cors"
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}))

// Accepting the json
app.use(express.json({limit:"20kb"}))

// Encoding the url configuration
app.use(express.urlencoded({extended : true, limit : "20kb"}))

// It will store file/folder in public assets/folders
app.use(express.static("public"))

// We can access and set the cookies
app.use(cookieParser())



// Import the routes
import userRoutes from "./routes/user.routes.js"

app.use("/api/v1/user", userRoutes)         // declaration of route


export {app}