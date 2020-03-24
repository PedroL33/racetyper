import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import { toggleActive, togglePlaying } from '../../actions/index';
import { useHistory } from "react-router-dom";
import checkAuth from '../../authorization/checkAuth';

export default function ProfileTab() {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = decode(localStorage.getItem('token'))
    const scores = useSelector(state => state.getScores)
    const avgWPM = Math.round(scores.success && scores.payload.length ? scores.payload.reduce((total, current) => { return {wpm: total.wpm + current.wpm} }).wpm/scores.payload.length : 0)
    const avgAccuracy = Math.round(scores.success && scores.payload.length ? scores.payload.reduce((total, current) => { return {accuracy: total.accuracy + current.accuracy} }).accuracy/scores.payload.length : 0)
    const max = scores.success && scores.payload.length ? scores.payload.reduce((max, current) => { return {wpm: Math.max(max.wpm, current.wpm)}}) : 0
    
    if(!checkAuth()) {
        history.push('/login');
    }

    function handleClick(e) {
        e.preventDefault()
        dispatch(toggleActive())
        dispatch(togglePlaying())
    }

    return (
        <div className="container-fluid">
            <div className="row bg-secondary">
                <div className="my-2 ml-auto mr-3"><h2>{user.username}</h2></div>
            </div>
            <div className="row">
                <ul className="list-group list-group-flush col">
                    <li className="list-group-item">
                        Games played: <div className="float-right">{scores.payload && scores.payload.length ? scores["payload"].length : "No data..."}</div>
                    </li>
                    <li className="list-group-item">
                        Average Speed: <div className="float-right">{scores.payload && scores.payload.length ? avgWPM : "No data..."}</div>
                    </li>
                    <li className="list-group-item">
                        Average Accuracy: <div className="float-right">{scores.payload && scores.payload.length ? avgAccuracy : "No data..."}</div>
                    </li>
                </ul>
                <div className="col">
                    <div className="text-center my-3">High Score</div>
                    {scores.success && scores.payload.length ? <h1 className="text-center my-3">{max.wpm} WPM!</h1> : <h4 className="text-center my-3">No data yet...</h4>}
                </div>
            </div>
            <div className="row">
                <button onClick={(e)=>{handleClick(e)}} className="form-control btn btn-primary">Test you typing speed.</button>
            </div>
        </div>
    )
}