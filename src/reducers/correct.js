const correctReducer = (state="", action) => {
    switch(action.type) {
        case "ADDCORRECT":
            return state+action.payload;
        case "REMOVECORRECT":
            return state.slice(0, state.length-1)
        case "RESETCORRECT":
            return ""
        default:
            return state
    }
}

export default correctReducer;