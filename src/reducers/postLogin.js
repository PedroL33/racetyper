const postLoginReducer = (state={}, action) => {
    switch(action.type) {
        case 'POSTLOGINSTART':
            return {started: "Pending."}
        case 'POSTLOGINSUCCESS':
            return {success: "Success!"};
        case 'POSTLOGINERROR':
            return action.payload;
        default:
            return state;
    }
}

export default postLoginReducer;