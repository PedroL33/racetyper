import { postSignupStart, postSignupSuccess, postSignupError } from '../actions/index';

export const postSignup = (username, email, password, confirm) => {
    return dispatch => {
        dispatch(postSignupStart())
        if(password !== confirm) {
            dispatch(postSignupError({errors: [{msg: "Passwords must match.", param: "confirm"}]}))
        }else {
            fetch('https://racetyper-backend.herokuapp.com/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    email: email
                })
            })
            .then(res => res.json())
            .then(data => {
                if(data.errors) {
                    dispatch(postSignupError(data.errors));
                }else {
                    dispatch(postSignupSuccess());
                }
            })
            .catch(error => {
                postSignupError(error);
            })
        }
    }
}