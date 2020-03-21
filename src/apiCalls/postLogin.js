import { postLoginStart, postLoginSuccess, postLoginError } from '../actions/index';
import { getScores } from './getScores';
import { getAllScores } from './getAllScores';

export const postLogin = (username, password) => {
    return dispatch => {
        dispatch(postLoginStart())
        fetch('https://racetyper-backend.herokuapp.com/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(res => res.json())
        .then( data => {
            if(data.token) {
                localStorage.setItem('token', data.token);
                dispatch(getScores());
                dispatch(getAllScores());
                dispatch(postLoginSuccess());
            }else {
                dispatch(postLoginError(data));
            }
        })
        .catch(err => {
            dispatch(postLoginError(err))
        })
    }
}