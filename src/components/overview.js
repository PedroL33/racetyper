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
            <div className="overview-container">
                <div className="overview">
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
                </div>
            </div>
        );
    }

    return(
        <ControlledTabs />
    )
}

export default Overview;