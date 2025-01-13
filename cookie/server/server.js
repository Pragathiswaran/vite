const express = require('express');
const cors = require('cors');
const cookie = require('cookie-parser');
const app = express();
const jwt = require('jsonwebtoken');

app.use(cookie());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}));

app.post('/',(req,res) => {
    const { data }  = req.body;
    // console.log(data);
    // res.json(data);
    if(data == 'praga'){
        const token = jwt.sign({ data: data }, 'secret_key');
        console.log(token);
        res.cookie('token', token, {
            httpOnly: true, 
            secure: true,
            sameSite: 'none',
            maxAge: 3600000 // 1 hour
        });
        return res.status(200).json({ message: 'Cookie set successfully' });
    } else {
        return res.status(400).json({ message: 'Invalid data' });
    }
})

app.get('/dashboard',(req,res) => {
    const token = req.cookies.token;
    console.log(token);
    jwt.verify(token, 'secret_key', (err, data) => {
        if(err){
            return res.status(400).json({ message: 'Invalid token' });
        }
        return res.status(200).json({ message: 'Welcome to dashboard' });
    })
})

app.listen(8000, () => console.log('Server running on port 8000'));