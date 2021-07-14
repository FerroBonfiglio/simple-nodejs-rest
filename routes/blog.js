const express   = require('express');
const router    = express.Router();
const Blog      = require('../modules/Blog')

// GETS ALL BLOG ARTICLES
router.get('/', async (req, res) => {
    try{
        const allBlogs = await Blog.find();
        res.status(200).json(allBlogs);
    }catch(err){
        res.status(500).json({ message: err });
    }
});

// GET BLOG
router.get('/:blogId', async (req, res) => {
    try{
        const getBlog = await Blog.findById(req.params.blogId);
        res.status(200).json(getBlog);
    }catch(err){
        res.status(404).json({ message: err });
    }
});

// UPDATE BLOG
router.patch('/:blogId', async (req, res) => {
    try{
        const updatedBlog = await Blog.updateOne(
            { 
                _id: req.params.blogId 
            },
            { 
                $set: {
                    title: req.body.title
                } 
            }
        );

        res.status(200).json(updatedBlog);
    }catch(err){
        res.status(500).json({ message: err })
    }
});

// DELETE BLOG
router.delete('/:blogId', async (req, res) => {
    try{
        const deleteBlog = await Blog.deleteOne({ _id: req.params.blogId });
        
        res.status(200).json(deleteBlog);
    }catch(err){
        res.status(500).json({ message: err });
    }
})

// CREATE NEW BLOG
router.post('/', async (req, res) => {
    
    const blog = new Blog({
        title: req.body.title,
        description: req.body.description,
    });

    try{
        const newBlog = await blog.save();
        res.status(200).json(newBlog);
    }catch(err){
        res.status(500).json({ message: err });
    }
    
});




module.exports = router;