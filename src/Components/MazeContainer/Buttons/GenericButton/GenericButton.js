import React from 'react';
import './GenericButton.scss';


const GenericButton = ({changeScreen, children}) => {
    return (
        <div className={'generic-button button-no-selection'}
        onClick={changeScreen}
        >
            {children}
        </div>

    )
};

export default GenericButton;