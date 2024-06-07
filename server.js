const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const PORT = process.env.PORT || 8000

app.use(express.json({extended : false}))

// const withDb = async (operations,res)=>{
//     try{
//         const client = await MongoClient.connect("mongodb://localhost:27017");
//         const db = client.db('demo');
//         await operations(db)
//         client.close(); 
//     }
//     catch(error){
//         res.status(500).json({ message : 'Error connecting to database', error})
//     }
// }
// app.get('/example/:name', async (req,res)=>{
//    withDb(async (db)=>{
//         const articleName = req.params.name;
//         const articles = await db
//             .collection('student')
//             .findOne({ name : articleName});
//         res.status(200).json(articles);
//     }, res)
// });

// app.post('/:name/add-comments',(req,res)=>{
//     const {username,text,gift} = req.body
//     const articleName = req.params.name
//     withDb( async (db) => {
//         const articleInfo = await db.collection('student').findOne({name:articleName});
//         await db.collection('student').updateOne({name:articleName},{
//             '$set':{
//                 comments : articleInfo.comments.concat({username,text,gift})
//             }
//         })
//         const updatedInfo = await db.collection('student').findOne({name : articleName})
//         res.status(200).json(updatedInfo);
//     },res)
// })
app.get('/',(req,res)=>{
    res.send("hello world");
})

app.listen(PORT,()=>{console.log(`server started at port ${PORT}`)})