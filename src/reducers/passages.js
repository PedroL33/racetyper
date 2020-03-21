const passagesReducer = (state=[], action) => {
    switch(action.type) {
        case "FETCH_PASSAGES_START":
            return ['Pending']
        case "FETCH_PASSAGES_SUCCESS":
            return action.payload
        case "FETCH_PASSAGES_ERROR":
            return [action.payload]
        default:
            return state;
    }
}

export default passagesReducer;