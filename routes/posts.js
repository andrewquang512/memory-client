import express from 'express';

import { getPosts, getPostsBySearch, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);

router.post('/', auth,  createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

export default router;

// ? is has to be :id we need to know id before we edit something - update post

// router.get('/', (req, res) => {
//     res.send('THIS WORK!' + req.params.id);
// }); 
// ? because in the real application
// ? there are a lot of method and logic to 
// ? that will make file complication and easy to get lost
// ? so we extract to put it in /controller/posts.js