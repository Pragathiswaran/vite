const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000

const articleInfo = {
    'learn-react': {
        comment: [],
    },
    'learn-node': {
        comment: [],
    },
    'my-thoughts-on-resumes': {
        comment: [],
    },

}

app.use(express.json({extended : false}))

// app.get('/',(req,res)=>{
//     res.send('hello world')
// })

// app.post('/',(req,res)=>{
//     res.send(`Hello ${req.body.name} and the age is ${req.body.age}`)
// })

// app.get('/hello/:name',(req,res)=>{ res.send(`hello ${req.params.name}`)})

app.post('/:name/add-comments',(req,res)=>{
    const {username,text,gift} = req.body
    const articleName = req.params.name
    articleInfo[articleName].comment.push({username,text,gift})
    res.status(200).send(articleInfo[articleName])
})

app.listen(PORT,()=>{console.log(`server started at port ${PORT}`)})