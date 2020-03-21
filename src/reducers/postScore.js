const postScoreReducer = (state="", action) => {
    switch(action.type) {
        case "POST_SCORE_START":
            return "Pending";
        case "POST_SCORE_SUCCESS":
            return "Success";
        case "POSTSCORE_ERROR":
            return "Error";
        default:
            return state;
    }
}

export default postScoreReducer;