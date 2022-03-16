import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    // ? we can use likeCount: Number but in here we declare it as object
    // ? to add additional information
    likes: { type: [String], default: [] },
    createdAt:{
        type: Date,
        default: new Date(),
    }
});

// ? now we have schema and now we turn it into model
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;