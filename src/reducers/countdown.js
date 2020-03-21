const countdownReducer = (state= 3, action) => {
    switch(action.type) {
        case "TICK": 
            return state - 1;
        case "RESETCOUNTDOWN":
            return 3;
        default:
            return state;
    }
}

export default countdownReducer;