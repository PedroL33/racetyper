const passageReducer = (state="", action) => {
    switch(action.type) {
        case "CHOOSEPASSAGE":
            return action.payload;
        case "REMOVEPASSAGE":
            return state.slice(1, state.length);
        case "ADDPASSAGE":
            return action.payload + state;
        default:
            return state;
    }
}

export default passageReducer;