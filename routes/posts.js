import express from "express";
import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from "../controllers/posts.js";

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
// ? is has to be :id we need to know id before we edit something - update post

// router.get('/', (req, res) => {
//     res.send('THIS WORK!' + req.params.id);
// }); 
// ? because in the real application
// ? there are a lot of method and logic to 
// ? that will make file complication and easy to get lost
// ? so we extract to put it in /controller/posts.js


export default router;