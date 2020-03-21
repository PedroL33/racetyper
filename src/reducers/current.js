const currentReducer = (state="", action) => {
    switch(action.type) {
        case 'ADD':
            return state+=action.payload;
        case 'REMOVE':
            return state.slice(0, state.length-1);
        case 'RESET':
            return "";
        default:
            return state;
    }
}

export default currentReducer;