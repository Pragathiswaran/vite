const { response } = require('express');
// const bcrypt = require('bcrypt');
const Users = require('../models/user');
// const { OAuth2Client } = require('google-auth-library');
const { hashPassword, comparePassword } = require('../helper/auth');
// const {getCurrentDate, getCurrentTime} = require('../helper/date');
const Blog = require('../models/blog');
const axios = require('axios');
const jwt = require('jsonwebtoken');


const registerUser = async (req,res) => {
    try{
        // console.log(req.body)
        const { token } = req.body; 
        if(token){
            
            const response = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })

            const { email, name, sub: googleId } = response.data;
            // console.log(response.data)
            const emailExist = await Users.findOne({email})
            // console.log(user)
            if(emailExist){
                return res.status(409).json({ path: "email", error: "Email already exists" });
            }

            const newUser = await Users.create({
                username: name,
                email: email,
                password:googleId
            })
            // console.log(newUser) 

            return res.status(201).json({message:newUser})
        } 
        
        if(!token){
            // console.log('manual')
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

const loginUser = async (req,res) => {
    try{

        const { token } = req.body;
        if(token){
            
            const response = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })

            const { email } = response.data;

            const emailExist = await Users.findOne({email});
            if(!emailExist){
                return res.status(404).json({path:"email", error:"Email not found"})
            }

            const accessToken = jwt.sign({email:emailExist.email, id:emailExist._id, username:emailExist.username}, process.env.JWT_SECRET, {expiresIn:"1h"})
            return res.status(200).json({accessToken,message:"User logged in successfully"});
        }
        
        if(!token){
            const { email, password } = req.body;

            const emailExist = await Users.findOne({email})
            // console.log(emailExist)
            if(emailExist === null){
                return res.status(404).json({path:"email", error:"Email not found"})
            }

            const passwordMatch = await comparePassword(password, emailExist.password)
            // console.log(passwordMatch)
            if(!passwordMatch){
                return res.status(401).json({path:"password", error:"Password not match"})
            }

            const accessToken = jwt.sign({email:emailExist.email, id:emailExist._id}, process.env.JWT_SECRET, {expiresIn:"1h"})
            return res.status(200).json({accessToken,message:"User logged in successfully"});
        }

    }catch(err){
        console.log(err)
        return res.status(500).json({error:err.message})
    }
}

const authenticateUser = async (req,res, next) => {
    const authHeader = req.headers.authorization;

    // Validate presence of the authorization header
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: "Unauthorized: Token missing or malformed" });
    }

    const token = authHeader.split(' ')[1]; 

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); 
        req.user = decoded;
        next(); 
    } catch (err) {
        console.error("JWT Verification Error:", err);
        return res.status(403).json({ error: "Unauthorized: Invalid token" });
    }
}

const getBlogPosts = async (req,res) => {
    try{
        const posts = await Blog.find();
        return res.status(200).json(posts);
    }catch(err){
        console.log(err)
        return res.status(500).json({error:err.message})
    }
}

const getSingleBlog = async (req,res) => {
    try{
        const { id } = req.params;
        const post = await Blog.findById(id);
        return res.status(200).json(post);
    }catch(err){
        console.log(err)
        return res.status(500).json({error:err.message})
    }
}

const createBlog = async (req,res) => {
    try {
        const { blogname, blog, author } = req.body;

        if(!blogname || !blog || !author){
            return res.status(400).json({error:"Please fill all the fields"})
        }
        
        const newBlog = await Blog.create({
            blogname,
            blog,
            author
        });
        
        return res.status(201).json({message:newBlog});

    } catch (error) {
        console.log(error)
        return res.status(500).json({error:error.message})
    }
}

module.exports = { registerUser,loginUser, authenticateUser, getBlogPosts, getSingleBlog, createBlog }