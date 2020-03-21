const incorrectReducer = (state="", action) => {
    switch(action.type) {
        case "ADDINCORRECT":
            return state+=action.payload;
        case "REMOVEINCORRECT":
            return state.slice(0, state.length-1);
        case "RESETINCORRECT":
            return "";
        default:
            return state;
    }
}

export default incorrectReducer;