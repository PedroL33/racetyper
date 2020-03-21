import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { postSignup } from '../apiCalls/postSignup';
import { useDispatch, useSelector } from 'react-redux';
import { postLogin } from '../apiCalls/postLogin';
import Nav from './nav';
import checkAuth from '../authorization/checkAuth';

function Signup() {

    const history = useHistory();
    const [username, setUsername] = useState("");
    const [confirm, setConfirm] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const loginStatus = useSelector(state => state.postLogin)
    const signupStatus = useSelector(state => state.postSignup)
    
    const errors = {}
    if(signupStatus["errors"]) {
        for(var i=0; i< signupStatus["errors"].length; i++) {
            errors[signupStatus["errors"][i]["param"]] = signupStatus["errors"][i]["msg"];
        }
    }
    if(signupStatus.errmsg){
        if(signupStatus.errmsg.includes("email")) {
            errors["email"] = "Email already used.";
        }
        if(signupStatus.errmsg.includes("username")) {
            errors["username"] = "Username taken."
        }
    
    }

    useEffect(()=> {
        if(signupStatus.success) {
            dispatch(postLogin(username, password));
        }
    }, [signupStatus])

    useEffect(()=> {
        if(loginStatus.success) {
            history.push('/')
        }
    }, [loginStatus])
    
    useEffect(()=>{
        if(checkAuth()) {
            history.push('/');
        }
    }, [])

    function signup(e) {
        e.preventDefault();
        dispatch(postSignup(username, email, password, confirm))
    }

    return(
        <div>
            <Nav />
            <div className="container col-md-4 mt-5">
                <h3>Signup:</h3>
                <label>Username:</label>
                {errors["username"] && <div className="d-inline text-warning">&nbsp;({  errors["username"]})</div>}
                <input type="text" placeholder="Username" className={errors["username"] ? "is-invalid form-control mb-2" : "form-control mb-2"} onChange={(e) => {setUsername(e.target.value)}} />
                <label>Password:</label>
                {errors["password"] && <div className="d-inline text-warning">&nbsp;({  errors["password"]})</div>}
                <input type="password" placeholder="Password" className={errors["password"] ? "is-invalid form-control mb-2" : "form-control mb-2"} onChange={(e) => {setPassword(e.target.value)}}/>
                <label>Confirm Password:</label>
                {errors["confirm"] && <div className="d-inline text-warning">&nbsp;({  errors["confirm"]})</div>}
                <input type="password" placeholder="Confirm" className={errors["confirm"] ? "is-invalid form-control mb-2" : "form-control mb-2"} onChange={(e) => {setConfirm(e.target.value)}}/>
                <label>Email:</label>
                {errors["email"] && <div className="d-inline text-warning">&nbsp;({  errors["email"]})</div>}
                <input type="text" placeholder="Email" className={errors["email"] ? "is-invalid form-control mb-2" : "form-control mb-2"} onChange={(e) => {setEmail(e.target.value)}}/>
                <button className="btn btn-primary form-control mt-3" onClick={e => {signup(e)}} >
                    Signup <i className="fas fa-pen"></i> 
                </button>
            </div>
        </div>
    )
}

export default Signup;