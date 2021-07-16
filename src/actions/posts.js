import * as api from '../api';

// ? Action Creators
// ? are functions that return actions
export const getPosts = () => async (dispatch) => {
    // ? redux tank allow to specify an arrow function here

    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FETCH ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }

    // ? const action = { type: 'FETCH_ALL', payload: []}
    // ? action is an object that has have the type and a payload
    // ? payload is the data we store all of our posts

    // dispatch(action);
    // instead of return action, it will dispatch the action
}

export const createPost = (post) => async (dispatch) => {
    try {
      const { data } = await api.createPost(post);
  
      dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
};


// ? we have to use redux tank to work with asynchronous
// ? which need time to pass
