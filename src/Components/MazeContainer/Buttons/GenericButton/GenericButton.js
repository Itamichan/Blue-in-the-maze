import React from 'react';
import './GenericButton.scss';


const GenericButton = ({changeScreen, children}) => {
    return (
        <div className={'generic-button'}
        onClick={changeScreen}
        >
            {children}
        </div>

    )
};

export default GenericButton;