const mistakesReducer = (state=0, action) => {
    switch(action.type) {
        case "UPDATEMISTAKES":
            return state + 1;
        case "RESETMISTAKES":
            return 0;
        default: 
            return state;
    }
}

export default mistakesReducer