// ? reducer is a function that is like a constructor
// ? equal to function that accept the state and 
// ? also accept the action

import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

const reducer = (posts = [], action) => {
    // ? we can implent some logic here
    // ? and return either action or state
    switch (action.type) {
        // ? the state always needs to be equal to something
        // ? so we have to set initial value
        // ? here because state is simply post
        // ? so we change name "state" to "post"
        case FETCH_ALL:
        return action.payload;
        case LIKE:
        return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case CREATE:
        return [...posts, action.payload];
        case UPDATE:
        return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case DELETE:
        return posts.filter((post) => post._id !== action.payload);
        default:
        return posts;
    }
};

export default reducer;