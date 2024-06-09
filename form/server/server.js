const express = require('express');
const app = express();
const { MongoClient } = require("mongodb");
// const dotenv = require('dotenv');

// dotenv.config();  // Load environment variables from .env file  process.env.MONGODB_URI || 

const PORT = process.env.PORT || 8000;
const uri = 'mongodb://localhost:27017';
const dbName = 'register';

async function createUniqueIndex() {
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('signup');

    // Create a unique index on the email field
    await collection.createIndex({ email: 1 }, { unique: true });

    console.log("Unique index created on 'email' field.");
  } catch (error) {
    console.error('Error creating unique index:', error);
  } finally {
    await client.close();
  }
}

// Create the unique index when the server starts
createUniqueIndex();

app.get('/api', async (req, res) => {
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('signup');

  try {
  
    // Insert a document
    await collection.insertOne({
      id: 1,
      username: 'mihaan',
      email: 'mihaan89@gmail.com',
      password: 'mihaan@009'
    });
   
    res.status(200).json({
      message: 'API is working and the data is stored in database'
    });
  } catch (error) {
    console.error('Error connecting to MongoDB or inserting document:', error);
    if (error.code === 11000) {
      const value = collection.find({})
      res.status(400).json({
        message: 'Duplicate key error: Email must be unique',
        value: value
      });
    } else {
      res.status(500).json({
        message: 'Internal Server Error'
      });
    }
  } finally {
    await client.close();
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
