import React from 'react';
import {useHistory} from 'react-router-dom';
import { togglePlaying, toggleActive, choosePassage, resetCorrect, resetIncorrect, resetCountdown, resetMistakes } from '../actions/index';
import { useSelector, useDispatch } from 'react-redux';

function Nav(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const isActive = useSelector(state => state.isActive);
    const isPlaying = useSelector(state => state.isPlaying);
    const passages = useSelector(state => state.passages);

    function logout() {
        localStorage.removeItem('token')
        var index = Math.floor(Math.random() * 723)
        dispatch(choosePassage(passages[index].text))
        dispatch(resetCorrect())
        dispatch(resetIncorrect())
        dispatch(resetCountdown())
        dispatch(resetMistakes())
        isActive && dispatch(toggleActive());
        isPlaying && dispatch(togglePlaying())
        history.push('/');
    }

    return(
        <div>
            <nav className="navbar justify-content-between">
                <div className="nav-item">
                    <a className="navbar-brand text-white" href="/">Racetyper <i className="fas fa-running"></i></a>
                </div>
                { (!props.isLogged && (window.location.pathname === '/signup' || window.location.pathname === '/')) && 
                    <div className="nav-item ml-auto"> 
                        <a className="nav-link btn-sm btn-primary" href="/login" >Login</a>
                    </div> 
                }
                { (!props.isLogged && (window.location.pathname === '/login' || window.location.pathname === '/')) &&
                    <div className="nav-item ml-3">
                        <a className="nav-link btn-sm btn-primary" href="/signup">Signup</a>
                    </div> 
                }   
                { props.isLogged && 
                    <div className="nav-item ml-auto">
                        <div className="nav-link btn-sm btn-outline-warning" onClick={()=>{logout()}}>Logout</div>
                    </div>
                }  
            </nav>
        </div>
    )
}

export default Nav;