import decode from 'jwt-decode';
import { postScoreStart, postScoreSuccess, postScoreError } from '../actions/index';

export const postScores = (wpm, accuracy) => {
    const token = localStorage.getItem('token')
    const user = decode(token).user;

    return dispatch => {
        dispatch(postScoreStart())
        fetch('https://racetyper-backend.herokuapp.com/', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'bearer: ' + token
            },
            body: JSON.stringify({
                user_id: user,
                wpm: wpm,
                accuracy: accuracy
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data.error) { throw(data.error) }
            dispatch(postScoreSuccess(data))
            return data.payload
        })
        .catch(error => {
            dispatch(postScoreError())
        })
    }
}

export default postScores