const {Blog} = require('../models/Blog');


module.exports.test = (req,res) => {
    res.json({
        message:"Backend is working"
    })
};

module.exports.blogPost = async(req,res,next) => {
    try {
        const { title, author, content } = req.body;
        const newBlog = new Blog({
            title,
            author,
            content,
        });
        await newBlog.save();
        res.status(201).json({ success: true, message: 'Blog post created successfully' });
    } catch (error) {
        next(error);
    }
}

module.exports.viewBlogs = async(req,res,next) => {
    try {
        const blog = await Blog.find();
        res.status(200).json({blog});
    } catch (error) {
        next(error);
    }
}
module.exports.deleteBlogs = async (req, res, next) => {
    try {
      const blogId = req.params.id;  
      await Blog.findByIdAndDelete(blogId);
      res.status(200).json({ success: true, message: 'Blog post deleted successfully' });
    } catch (error) {
      next(error);
    }
}