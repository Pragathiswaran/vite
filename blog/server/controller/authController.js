const Users = require('../models/user');
const { hashPassword, comparePassword } = require('../helper/auth');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const cookie = require('cookie-parser');

const registerUser = async (req,res) => {
    try{
        const { token } = req.body; 
        if(token){
            
            const response = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })

            const { email, name, sub: googleId } = response.data;
            const emailExist = await Users.findOne({email})
            if(emailExist){
                return res.status(409).json({ path: "email", error: "Email already exists" });
            }

            const newUser = await Users.create({
                username: name,
                email: email,
                password:googleId
            })

            return res.status(201).json({message:newUser})
        } 
        
        if(!token){
            const { username, email, password } = req.body;
            const emailExist = await Users.findOne({email})

            if(emailExist){
                return res.status(409).json({ path: "email", error: "Email already exists" });
            }
    
            const hashedPassword = await hashPassword(password)
    
            const user = await Users.create({
                username,
                email,
                password : hashedPassword
            })
    
            return res.status(201).json({message:user})
        }
    } catch(err){
        console.log(err)
        return res.status(500).json({error:err.message})
    }
}

const loginUser = async (req, res) => {
    try {
        const { token } = req.body;

        if (token) { 
            const response = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
           
            const { email } = response.data;
            const emailExist = await Users.findOne({ email });

            if (!emailExist) {
                return res.status(404).json({ path: "email", error: "Email not found" });
            }

            const accessToken = jwt.sign(
                { email: emailExist.email, id: emailExist._id, username: emailExist.username },
                process.env.JWT_SECRET
            );

            res.cookie('token', accessToken, { 
                maxAge: 3600000 
            });

            return res.status(200).json({ message: "User logged in successfully" });
        }

        if (!token) {  
            const { email, password } = req.body;
            const emailExist = await Users.findOne({ email });

            if (!emailExist) {
                return res.status(404).json({ path: "email", error: "Email not found" });
            }

            const passwordMatch = await comparePassword(password, emailExist.password);

            if (!passwordMatch) {
                return res.status(401).json({ path: "password", error: "Password does not match" });
            }

            const accessToken = jwt.sign({ email: emailExist.email, id: emailExist._id, username:emailExist.username }, process.env.JWT_SECRET);

            res.cookie('token', accessToken, {
                maxAge: 3600000 
            });

            return res.status(200).json({ message: "User logged in successfully" });
        }

    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: err.message });
    }
};

const authenticateUser = async (req,res) => {
    const authCookie  = req.cookies.token;
    jwt.verify(authCookie, process.env.JWT_SECRET, (err, user) => {
        if(err) return res.status(401).json({error:err.message})
        return res.status(200).json(user)
    })
}

module.exports = { registerUser,loginUser, authenticateUser }