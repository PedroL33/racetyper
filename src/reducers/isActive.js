const isActiveReducer = (state=false, action) => {
    switch(action.type) {
        case "TOGGLEACTIVE":
            return !state
        default:
            return state
    }
}

export default isActiveReducer;