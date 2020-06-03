import React from 'react';
import {useHistory} from 'react-router-dom';
import { togglePlaying, toggleActive, choosePassage, resetCorrect, resetIncorrect, resetCountdown, resetMistakes } from '../actions/index';
import { useSelector, useDispatch } from 'react-redux';
import checkAuth from '../authorization/checkAuth';
import getScores from '../apiCalls/getScores';
import getAllScores from '../apiCalls/getAllScores';

function Nav(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const isActive = useSelector(state => state.isActive);
    const isPlaying = useSelector(state => state.isPlaying);
    const passages = useSelector(state => state.passages);

    function clearConsole() {
        var index = Math.floor(Math.random() * 723)
        dispatch(choosePassage(passages[index].text))
        dispatch(resetCorrect())
        dispatch(resetIncorrect())
        dispatch(resetCountdown())
        dispatch(resetMistakes())
    }

    function logout() {
        localStorage.removeItem('token')
        clearConsole()
        isActive && dispatch(toggleActive());
        isPlaying && dispatch(togglePlaying())
        history.push('/');
    }

    function handleClick() {
        dispatch(toggleActive())
        clearConsole()
        if(!isPlaying) {
            dispatch(togglePlaying());
        }
        if(checkAuth()) {
            dispatch(getScores())
            dispatch(getAllScores())
        }
    }

    return(
        <div>
            <nav className="navbar">
                <div className="nav-item">
                    <a className="navbar-brand" href="/">Racetyper</a>
                </div>
                <div className="icon-wrapper nav-item mx-auto" onClick={()=> handleClick()}>
                    <i className="fas fa-running running-icon"></i>
                </div>
                { (!props.isLogged && (window.location.pathname === '/signup' || window.location.pathname === '/')) && 
                    <div className="nav-item auto"> 
                        <a className="nav-link" href="/login" >Login</a>
                    </div> 
                }
                { (!props.isLogged && (window.location.pathname === '/login' || window.location.pathname === '/')) &&
                    <div className="nav-item">
                        <a className="nav-link" href="/signup">Signup</a>
                    </div> 
                }   
                { props.isLogged && 
                    <div className="nav-item ml-auto">
                        <div className="nav-link text-warning" onClick={()=>{logout()}}>Logout</div>
                    </div>
                }  
            </nav>
        </div>
    )
}

export default Nav;