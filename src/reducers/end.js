const endReducer = (state=0, action) => {
    switch(action.type) {
        case "INITIALIZE_END":
            return Date.now();
        default:
            return state;
    }
}

export default endReducer;