import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import ProfileTab from './tabComponents/profileTab';
import HistoryTab from './tabComponents/historyTab';
import GlobalTab from './tabComponents/globalTab';

function Overview() {

    function ControlledTabs() {

        const [key, setKey] = useState('profile');
        
        return (
            <Tabs activeKey={key} onSelect={k => setKey(k)}>
                <Tab eventKey="profile" title="Profile">
                    <ProfileTab />
                </Tab>
                <Tab eventKey="history" title="History">
                    <HistoryTab />
                </Tab>
                <Tab eventKey="global" title="Global">
                    <GlobalTab />
                </Tab>
            </Tabs>
        );
    }

    return(
        <div className="container col-md-8 mt-5">
            <ControlledTabs />
        </div>
    )
}

export default Overview;