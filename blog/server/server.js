const express = require('express')
const dotenv = require('dotenv').config({path: require('path').resolve(__dirname,'.env')})
const app = express()
app.use(express.json())

app.get('/',(req,res)=> res.send("hello"))

app.listen(process.env.PORT,(req,res) => console.log(`server running on port ${process.env.PORT}`))