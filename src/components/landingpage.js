import React from 'react';
import Nav from './nav';
import Console from './console';
import { useSelector, useDispatch } from 'react-redux';
import { toggleActive, togglePlaying } from '../actions/index';

function LandingPage() {
    const isActive = useSelector(state => state.isActive);
    const dispatch = useDispatch();

    function handleClick(e) {
        e.preventDefault();
        dispatch(toggleActive());
        dispatch(togglePlaying());
    }
    
    return(
        <div>
            <Nav isLogged = {false} />
            { !isActive ? 
            <div className="jumbotron mt-5">
                <h1 className="display-4">Racetyper</h1>
                <hr className="my-4"></hr>
                <p className="lead">A place to practice your typing skills.</p>
                <p className="lead">Sign up or log in to keep track of your progress and see global statistics.</p>
                <hr className="my-4"></hr>
                <button className="btn btn-outline-success float-right" onClick={(e) => handleClick(e)}>Practice your typing.</button>
            </div> :
            <Console /> }
        </div>
    )
}

export default LandingPage;