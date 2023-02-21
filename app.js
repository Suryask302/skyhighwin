require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const userRouts = require('./routes/userRoutes')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/', userRouts)
module.exports = app
