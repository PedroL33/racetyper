import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postLogin } from '../apiCalls/postLogin';
import Nav from './nav';
import checkAuth from '../authorization/checkAuth';

function Login() {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const loggedIn = useSelector(state => state.postLogin)
    const history = useHistory();
    const dispatch = useDispatch();
    const loginStatus = useSelector(state => state.postLogin)

    useEffect(()=>{
        if(checkAuth()) {
            history.push('/');
        }
    }, [])

    useEffect(() => {
        if(loggedIn.success) {
            history.push('/')
        }
    }, [loggedIn])

    function login(e) {
        dispatch(postLogin(username, password));
     }

    return(
        <div>
            <Nav />
            <div className="container col-md-4 mt-5">
                <h3>Login:</h3>
                <label>Username:</label>
                {loginStatus.error && <div className="d-inline text-warning ml-auto">&nbsp; ({loginStatus.error})</div>}
                <input type="text" placeholder="Username" onChange={(e) => {setUsername(e.target.value) }} className={loginStatus.error ? "is-invalid form-control mb-2" : "form-control mb-2"} />
                <label>Password:</label>
                <input type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} className={loginStatus.error ? "is-invalid form-control mb-2" : "form-control mb-2"} />
                <button onClick={e => {login(e)}} className="btn btn-primary form-control mt-5 mb-5">
                    <i className="fas fa-lock"></i> Login  
                </button>
            </div>
        </div>
    )
}

export default Login;