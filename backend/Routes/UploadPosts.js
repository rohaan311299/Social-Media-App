const express = require('express');
const router = express.Router();
const multer = require('multer');
const Post = require('../models/Post');
const auth = require('../middleware/auth');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// POST route to create a new post
router.post('/create', auth, upload.single('image'), async (req, res) => {
    try {
        const { title, content } = req.body;
        
        const newPost = new Post({
            title,
            content,
            image: req.file ? req.file.path : null,
            author: req.user.id, // Assuming auth middleware adds user to req
            createdAt: new Date()
        });

        await newPost.save();

        res.status(201).json({
            success: true,
            message: 'Post created successfully',
            post: newPost
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating post',
            error: error.message
        });
    }
});

module.exports = router;