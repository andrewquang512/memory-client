import express, { Router } from "express";

const router = express.Router();

router.get('/', );

// router.get('/', (req, res) => {
//     res.send('THIS WORK!');
// });
// ? because in the real application
// ? there are a lot of method and logic to 
// ? that will make file complication and easy to get lost
// ? so we extract to put it in /controller/posts.js


export default router;