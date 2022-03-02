const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")

const errorMiddleware = require("./middleware/error")

// Config
dotenv.config({path:"config/config.env"})

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))

// Route Imports
const user = require("./routes/userRoute")
const fetchData = require("./routes/fetchDataRoute")

app.use("/api/v1", user)
app.use("/api/v1", fetchData)

// Middleware for errors
app.use(errorMiddleware)

module.exports = app