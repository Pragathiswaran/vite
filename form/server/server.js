const express = require('express');
const app = express();
// const { MongoClient } = require("mongodb");
const PORT = process.env.PORT || 8000;

app.get('/api',(req,res)=>{
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
