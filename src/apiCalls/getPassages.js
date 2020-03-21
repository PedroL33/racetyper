import { fetchPassagesStart, fetchPassagesSuccess, fetchPassagesError, choosePassage } from '../actions/index';

export default function getPassages() {
    return dispatch => {
        dispatch(fetchPassagesStart())
        fetch('https://type.fit/api/quotes')
        .then(res => res.json())
        .then(data => {
            if(data.error) { throw(data.error) }
            dispatch(fetchPassagesSuccess(data))
            const index = Math.floor(Math.random() * 723)
            dispatch(choosePassage(data[index].text))
            return data.payload
        })
        .catch(error => {
            dispatch(fetchPassagesError(error))
        })
    }
}

