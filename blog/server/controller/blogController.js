const Blog = require('../models/blog');
const moment = require('moment');
const multer = require('multer');
const upload = multer({ dest: '../../clinet/public/blog' });

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
        const blogImage = req.file;

        if(!blogname || !blog || !author){
            return res.status(400).json({error:"Please fill all the fields"})
        }
        
        if(!blogImage){
            return res.status(400).json({error:"Please upload an image"})
        }

        const newBlog = await Blog.create({
            blogname : blogname,
            blog : blog,
            author : author,
            date : moment().format('MMM Do YYYY'),
            time : moment().format('h:mm A'),
            blogImage : blogImage.filename
        });
        
        return res.status(200).json({message:newBlog});

    } catch (error) {
        console.log(error)
        return res.status(500).json({error:error.message})
    }
}

const createComment = async (req,res) => {
    try {
        const { comment, username, postid } = req.body;

        if(!comment || !username || !postid){
            return res.status(400).json({error:"Please fill all the fields"})
        }

        const newComment = await Blog.findByIdAndUpdate(postid, {
            $push: {
                comments: {
                    comment: comment,
                    name: username,
                    date: moment().format('MMM Do YYYY'),
                    time: moment().format('h:mm A')
                }
            }
        }, {new:true});

        if(!newComment){
            return res.status(404).json({error:"Post not found"})
        }

        return res.status(201).json({message:newComment});

    } catch (error) {
        console.log(error)
        return res.status(500).json({error:error.message})
    }
}

module.exports = { getBlogPosts, getSingleBlog, createBlog, createComment };