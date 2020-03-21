const postSignupReducer = (state={}, action) => {
    switch(action.type) {
        case "POSTSIGNUPSTART":
            return {pending: "Awaiting response."}
        case "POSTSIGNUPSUCCESS":
            return {success: "User created"};
        case "POSTSIGNUPERROR":
            return action.payload
        default:
            return state;
    }
}

export default postSignupReducer;