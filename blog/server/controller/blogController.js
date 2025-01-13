const Blog = require('../models/blog');

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

module.exports = { getBlogPosts, getSingleBlog, createBlog };