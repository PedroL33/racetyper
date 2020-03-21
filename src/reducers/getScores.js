const getScoresReducer = (state={}, action) => {
    switch(action.type) {
        case "GET_SCORES_START":
            return {pending: "pending"};
        case "GET_SCORES_SUCCESS":
            return {success: "success", payload: action.payload};
        case "GET_SCORES_ERROR":
            return {error: "error"};
        default:
            return state;
    }
}

export default getScoresReducer;