const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config({ path: require('path').resolve(__dirname, '.env') })
const cookieParser = require('cookie-parser')
const port = 8000
const mongoose = require('mongoose')

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.log('Connection Failed...\n' + err));

app.use('/', require('./routes/authRotues'))

app.listen(port, ()=> console.log(`Server is running on port ${port}`))