import currentReducer from './current';
import countdownReducer from './countdown';
import isActiveReducer from './isActive';
import isPlayingReducer from './isPlaying';
import passagesReducer from './passages';
import passageReducer from './passage';
import incorrectReducer from './incorrect';
import correctReducer from './correct';
import startReducer from './start';
import lengthReducer from './length';
import endReducer from './end';
import mistakesReducer from './mistakes';
import postScoreReducer from './postScore';
import getScoresReducer from './getScores';
import postSignupReducer from './postSignup';
import postLoginReducer from './postLogin';
import getAllScoresReducer from './getAllScores';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    current: currentReducer,
    countdown: countdownReducer,
    isActive: isActiveReducer,
    isPlaying: isPlayingReducer,
    passages: passagesReducer,
    passage: passageReducer,
    incorrect: incorrectReducer,
    correct: correctReducer,
    start: startReducer,
    end: endReducer,
    length: lengthReducer,
    mistakes: mistakesReducer,
    postScore: postScoreReducer,
    getScores: getScoresReducer,
    postSignup: postSignupReducer,
    postLogin: postLoginReducer,
    allScores: getAllScoresReducer
})

export default allReducers;