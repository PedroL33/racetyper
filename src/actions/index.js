export const add = (x) => {
    return {
        type: 'ADD',
        payload: x
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}

export const remove = () => {
    return {
        type: 'REMOVE'
    }
}

export const tick = () => {
    return {
        type: 'TICK'
    }
}

export const toggleActive = () => {
    return {
        type: 'TOGGLEACTIVE'
    }
}

export const togglePlaying = () => {
    return {
        type: 'TOGGLEPLAY'
    }
}

export const resetCountdown = () => {
    return {
        type: 'RESETCOUNTDOWN'
    }
}

export const fetchPassagesStart = () => {
    return {
        type: "FETCH_PASSAGES_START",
    }
}

export const fetchPassagesSuccess = (passages) => {
    return {
        type: "FETCH_PASSAGES_SUCCESS",
        payload: passages
    }
}

export const fetchPassagesError = (error) => {
    return {
        type: "FETCH_PASSAGES_ERROR",
        payload: error
    }
}

export const getScoresStart = () => {
    return {
        type: "GET_SCORES_START"
    }
}

export const getScoresSuccess = (results) => {
    return {
        type: "GET_SCORES_SUCCESS",
        payload: results
    }
}

export const getScoresError = () => {
    return {
        type: "GET_SCORES_ERROR"
    }
}

export const postScoreStart = () => {
    return {
        type: "POST_SCORE_START"
    }
}

export const postScoreSuccess = () => {
    return {
        type: "POST_SCORE_SUCCESS"
    }
}

export const postScoreError = () => {
    return {
        type: "POST_SCORE_ERROR"
    }
}

export const postSignupStart = () => {
    return {
        type: 'POSTSIGNUPSTART'
    }
}

export const postSignupSuccess = () => {
    return {
        type: 'POSTSIGNUPSUCCESS'
    }
}

export const postSignupError = (errors) => {
    return {
        type: 'POSTSIGNUPERROR',
        payload: errors
    }
}

export const postLoginStart = () => {
    return {
        type: "POSTLOGINSTART"
    }
}

export const postLoginSuccess = () => {
    return {
        type: "POSTLOGINSUCCESS"
    }
}

export const postLoginError = (errors) => {
    return {
        type: "POSTLOGINERROR",
        payload: errors
    }
}

export const getAllScoresStart = () => {
    return {
        type: "GETALL_SCORES_START"
    }
}

export const getAllScoresSuccess = (scores) => {
    return {
        type: "GETALL_SCORES_SUCCESS", 
        payload: scores
    }
}
export const getAllScoresError = (errors) => {
    return {
        type: "GETALL_SCORES_ERROR", 
        payload: errors
    }
}

export const choosePassage = (passage) => {
    return {
        type: "CHOOSEPASSAGE",
        payload: passage
    }
}

export const removePassage = () => {
    return {
        type: "REMOVEPASSAGE",
    }
}   

export const addPassage = (letter) => {
    return {
        type: "ADDPASSAGE",
        payload: letter
    }
}

export const addIncorrect = (incorrect) => {
    return {
        type: "ADDINCORRECT",
        payload: incorrect
    }
}

export const removeIncorrect = () => {
    return {
        type: "REMOVEINCORRECT"
    }
}

export const resetIncorrect = () => {
    return {
        type: "RESETINCORRECT"
    }
}

export const addCorrect = (letter) => {
    return {
        type: "ADDCORRECT",
        payload: letter
    }
}

export const removeCorrect = () => {
    return {
        type: "REMOVECORRECT"
    }
}

export const resetCorrect = () => {
    return {
        type: "RESETCORRECT"
    }
}

export const initializeLength = (length) => {
    return {
        type: "INITIALIZELENGTH",
        payload: length
    }
}

export const initializeStart = () => {
    return {
        type: "INITIALIZESTART"
    }
}

export const initializeEnd = () => {
    return {
        type: "INITIALIZE_END"
    }
}

export const updateMistakes = () => {
    return {
        type: "UPDATEMISTAKES"
    }
}

export const resetMistakes = () => {
    return {
        type: "RESETMISTAKES"
    }
}
