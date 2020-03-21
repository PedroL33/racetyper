const lengthReducer = (state=0, action) => {
    switch(action.type) {
        case "INITIALIZELENGTH":
            return action.payload
        default:
            return state
    }
}

export default lengthReducer;   