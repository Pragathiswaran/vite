const express = require('express')
const app = express()
const dotenv = require('dotenv')
const path = require('path')
dotenv.config({path:path.resolve(__dirname, '.env')})
const mongoose = require('mongoose')
const cors = require('cors')

app.use(express.json())
app.use(cors())

const port = process.env.PORT

app.listen(port,(req,res)=>{
    console.log(`Server is listening to port ${port}`)
})