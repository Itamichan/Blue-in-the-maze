import React from 'react';
import './TimeTracker.scss';

const TimeTracker = ({children}) => {
    return (
        <div id={'show-tracker'}>{children}</div>
    )
};

export default TimeTracker;