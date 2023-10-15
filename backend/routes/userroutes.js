const express = require('express');
const { test, blogPost, viewBlogs } = require('../controller/usercontroller');

const router = express.Router();

router.get('', test);
router.post('/postBlog', blogPost);
router.get('/viewBlog', viewBlogs);

module.exports = router;