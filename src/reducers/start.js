const startReducer = (state=0, action) => {
    switch(action.type) {
        case "INITIALIZESTART":
            return Date.now()
        default:
            return state
    }
}

export default startReducer