import React from 'react';
import Console from './console';
import Overview from './overview';
import {useSelector} from 'react-redux';
import Nav from './nav';

function Dashboard() {
    const isActive = useSelector(state => state.isActive);
    return(
        <div>
            <Nav isLogged={true} />
            {isActive? <Console /> : <Overview />}
        </div>
    )
}

export default Dashboard;