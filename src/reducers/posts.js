// ? reducer is a function that is like a constructor
// ? equal to function that accept the state and 
// ? also accept the action


const reducer = (posts = [], action) => {
    // ? we can implent some logic here
    // ? and return either action or state
    switch (action.type) {
        // ? the state always needs to be equal to something
        // ? so we have to set initial value
        // ? here because state is simply post
        // ? so we change name "state" to "post"
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];       
        default:
            return posts; 
    }
}

export default reducer;