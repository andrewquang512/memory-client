import PostMessage from "../models/postMessage.js";

// export const getPosts = (req, res) =>{
//     res.send('THIS WORKS:' + req.params.id);
// }

export const getPosts = async (req, res) =>{
    try {  // ? code in here is run if everything successful

        const postMessage = await PostMessage.find();
        // ? const postMessage = PostMessage.find();
        // ? it will find something inside a model it will take times
        // ? that's mean it is a asynchronous action
        // ? so we need await in find  and async in function

        console.log(postMessage);
        
        res.status(200).json(postMessage);
        // ? above line make function return something: status 200 = OK , json file postMessage

    } catch (error) { // ? if something wrong happen it will execute here
        res.status(404).json({ message: error.message });
    }
}

export const createPosts = async (req, res) =>{
    const post = req.body;

    const newPost = new PostMessage(post); // later on we will pass value in form in front-end to this

    try {
        await newPost.save();

        // https://www.restapitutorial.com/httpstatuscode.html
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
 

// * we define the getPosts method here
// * and include it in posts.js in routes folder
// ? req is an object containing information about HTTP request
// ? in response to req, you use res to send back the desired HTTP response