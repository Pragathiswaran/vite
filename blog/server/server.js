const express = require('express');
const dotenv = require('dotenv').config({ path: require('path').resolve(__dirname, '.env') });
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const mongoose = require('mongoose');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
 
})); 
// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection failed: ' + err));

// Routes setup
app.use('/', require('./routes/authRoutes'));

// Error handling middleware
app.use((err, req, res, next) => {
 console.log(res)
});

// Start the server
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
