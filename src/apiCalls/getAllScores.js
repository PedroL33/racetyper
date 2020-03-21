import { getAllScoresStart, getAllScoresSuccess, getAllScoresError } from '../actions/index';

export const getAllScores = () => {

    const token = localStorage.getItem('token')
    
    return dispatch => {
        dispatch(getAllScoresStart())
        fetch("https://racetyper-backend.herokuapp.com/", {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'bearer: ' + token
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                dispatch(getAllScoresError())
            }else {
                dispatch(getAllScoresSuccess(data))
            }
        })
        .catch(error => {
            dispatch(getAllScoresError())
        })
    }
}

export default getAllScores