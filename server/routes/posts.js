import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js'

// Setup router
const router = express.Router();

// Starting path: localhost:<POST>/posts
router.get('/', getPosts)
router.post('/', createPost);

export default router;