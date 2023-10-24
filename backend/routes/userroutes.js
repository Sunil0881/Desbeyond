const express = require('express');
const { test, blogPost, viewBlogs, deleteBlogs } = require('../controller/usercontroller');

const router = express.Router();

router.get('', test);
router.post('/postBlog', blogPost);
router.get('/viewBlog', viewBlogs);
router.post('/deleteBlog/:id', deleteBlogs);

module.exports = router;