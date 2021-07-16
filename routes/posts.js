import express from "express";
import { getPosts, createPosts } from "../controllers/posts.js";

const router = express.Router();

router.get('/', getPosts );
router.post('/', createPosts );

// router.get('/', (req, res) => {
//     res.send('THIS WORK!' + req.params.id);
// }); 
// ? because in the real application
// ? there are a lot of method and logic to 
// ? that will make file complication and easy to get lost
// ? so we extract to put it in /controller/posts.js


export default router;