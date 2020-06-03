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
            <div className="landing-container" style={{backgroundImage: `url(${window.location + "/images/landingBackground.jpg"})`}}>
                <div className="welcome">
                    <div className="welcome-message">
                        A place to practice your typing skills.
                    </div>
                    <button className="welcome-button" onClick={(e) => handleClick(e)}>Practice your typing.</button>
                </div>
                <div>
                    <div className="about row">
                        <div className="col-md-3 about-title">
                            <h2>What you can do...</h2>
                        </div>
                        <div className="col-md-3 about-item-container">
                            <div className="about-item">
                                <i class="far fa-keyboard about-item-icon"></i>
                                <div className="about-item-desc">Practice by typing motivational quotes and view results in words per minute and accuracy.</div>
                            </div> 
                        </div>
                        <div className="col-md-3 about-item-container">
                            <div className="about-item">
                                <i class="fas fa-chart-line about-item-icon"></i>
                                <div className="about-item-desc">Signup or login to keep track of your progress and view global leaderboard.</div>
                            </div> 
                        </div>
                        <div className="col-md-3 about-item-container">
                            <div className="about-item">
                                <i class="fas fa-user-friends about-item-icon"></i>
                                <div className="about-item-desc">Coming soon: Challenge others to a tying race to see who is the better typist.</div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div> :
            <Console /> }
        </div>
    )
}

export default LandingPage;