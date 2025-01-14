import PostMessage from "../models/postMessage.js";
import express from 'express';
import mongoose from 'mongoose';

// export const getPosts = (req, res) =>{
//     res.send('THIS WORKS:' + req.params.id);
// }

const router = express.Router();

export const getPosts = async (req, res) =>{
    const { page } = req.query;
    
    try {  // ? code in here is run if everything successful
        const LIMIT = 8;
        const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page

        const total = await PostMessage.countDocuments({});
        const posts = await PostMessage.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);
        // ? const postMessage = PostMessage.find();
        // ? it will find something inside a model it will take times
        // ? that's mean it is a asynchronous action
        // ? so we need await in find  and async in function

        //console.log(postMessage);
        
        res.json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
        //res.status(200).json(postMessage);
        // ? above line make function return something: status 200 = OK , json file postMessage

    } catch (error) { // ? if something wrong happen it will execute here
        res.status(404).json({ message: error.message });
    }
}

export const getPostsBySearch = async (req, res) => {
    const { searchQuery, tags } = req.query;

    try {
        const title = new RegExp(searchQuery, "i");

        const posts = await PostMessage.find({ $or: [ { title }, { tags: { $in: tags.split(',') } } ]});

        res.json({ data: posts });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

// * we define the getPosts method here
// * and include it in posts.js in routes folder

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) =>{
    const post = req.body;

    //const newPost = new PostMessage(post); // later on we will pass value in form in front-end to this
    const newPostMessage = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await newPostMessage.save();

        // https://www.restapitutorial.com/httpstatuscode.html
        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const likePost = async (req, res) => {
    // const { id } = req.params;

    // if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    // const post = await PostMessage.findById(id);

    // const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    // res.json(updatedPost);

    const { id } = req.params;

    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
      }

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostMessage.findById(id);

    const index = post.likes.findIndex((id) => id ===String(req.userId));

    if (index === -1) {
      post.likes.push(req.userId);
    } else {
      post.likes = post.likes.filter((id) => id !== String(req.userId));
    }
    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });
    res.status(200).json(updatedPost);
}

// req.params
// This property is an object containing properties mapped to the named route “parameters”.
// For example, if you have the route /user/:name, then the “name” property is available as req.params.name
// This object defaults to {}.
// source: http://expressjs.com/en/4x/api.html#req.params

// req.body
// Contains key-value pairs of data submitted in the request body.
// By default, it is undefined, and is populated
// when you use body-parsing middleware such as body-parser and multer.
// source: http://expressjs.com/en/4x/api.html#req.body


// ? req is an object containing information about HTTP request
// ? in response to req, you use res to send back the desired HTTP response

export default router;