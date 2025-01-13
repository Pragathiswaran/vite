const express = require('express');
const dotenv = require('dotenv').config({ path: require('path').resolve(__dirname, '.env.development') });
const cors = require('cors');
const moment = require('moment');
const cookieParser = require('cookie-parser');
const { authRouter, blogRouter } = require('./routes');

const app = express();
const mongoose = require('mongoose');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
})); 

// Error handling middleware
app.use((err, req, res, next) => {
  console.log(res)
}); 

// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection failed: ' + err));

// Routes setup
app.use('/', authRouter);
app.use('/', blogRouter);

console.log(moment().format('h:mm A'));
// Start the server
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
