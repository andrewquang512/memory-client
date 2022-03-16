import axios from 'axios';

const url = 'https://my-mern-stack-application.herokuapp.com/posts';
//const url = 'http://localhost:5000/posts'; // TODO: comment this when push to github

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);

// ? we gonna focus on adding redux because all actions toward back-end
// ? all be done by using REDUX and we need to dispatch those actions
// ? to do that, we have to do some boilerplate - any text, documentation, or procedures
// ? that can be reused more than once in a new context without any substantial changescode
// ? to implent REDUX we have to add files and folder for maintainable and scalability
