import React from 'react';
import Nav from './nav';

function LandingPage() {
    return(
        <div>
            <Nav isLogged = {false} />
            <div className="jumbotron mt-5">
                <h1 className="display-4">Racetyper</h1>
                <hr className="my-4"></hr>
                <p className="lead">A place to practice your typing skills.</p>
            </div>
        </div>
    )
}

export default LandingPage;