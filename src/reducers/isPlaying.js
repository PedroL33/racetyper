const isPlayingReducer = (state=false, action) => {
    switch(action.type) {
        case "TOGGLEPLAY":
            return !state
        default:
            return state
    }
}

export default isPlayingReducer;