const getAllScoresReducer = (state={}, action) => {
    switch(action.type) {
        case "GETALL_SCORES_START":
            return {pending: "pending"};
        case "GETALL_SCORES_SUCCESS":
            return {success: "success", payload: action.payload};
        case "GETALL_SCORES_ERROR":
            return {error: "error"};
        default:
            return state;
    }
}

export default getAllScoresReducer;