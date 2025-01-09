const express = require('express')
const dotenv = require('dotenv').config({path: require('path').resolve(__dirname,'.env')});
const cors = require('cors');
const app = express();
app.use(cors());
const mongoose = require('mongoose');

app.use(express.json())   
app.use(express.urlencoded({extended:true}))
app.use((req, res, next) => {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
    next();
  });
  
// app.get('/',(req,res)=> res.send('hello world'));

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('connected to mongodb'))
    .catch(err => console.log('connection failed\n' + err));

app.use('/',require('./routes/authRoutes'))

app.listen(process.env.PORT,(req,res) => console.log(`server running on port ${process.env.PORT}`))