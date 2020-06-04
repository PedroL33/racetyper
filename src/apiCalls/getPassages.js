import { choosePassage } from '../actions/index';

export const getPassages = () => {
    return dispatch => {
        fetch('https://favqs.com/api/qotd', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }})
        .then(res => res.json())
        .then(data => {
            if(data.error) { throw(data.error) }
            dispatch(choosePassage(data.quote.body))
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export default getPassages;
