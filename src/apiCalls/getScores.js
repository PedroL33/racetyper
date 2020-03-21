import decode from 'jwt-decode';
import { getScoresStart, getScoresSuccess, getScoresError } from '../actions/index';

export const getScores = () => {
    const token = localStorage.getItem('token')
    const user = decode(token).user;
    const url = "https://racetyper-backend.herokuapp.com/"+user;

    return dispatch => {
        dispatch(getScoresStart())
        fetch(url, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'bearer: ' + token
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                dispatch(getScoresError())
            } else {
                dispatch(getScoresSuccess(data))
            }
        })
        .catch(error => {
            dispatch(getScoresError())
        })
    }
}

export default getScores