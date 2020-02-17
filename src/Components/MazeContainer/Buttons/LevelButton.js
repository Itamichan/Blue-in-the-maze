import React from 'react';
import './LevelButton.scss';


const LevelButton = ({changeScreen, children, buttonLook, buttonDisabled}) => {

    let buttonStyle;
    if (buttonLook === 'levelCompleted') {
        buttonStyle = 'level-button'
    } else if (buttonLook === 'nextLevel') {
        buttonStyle = 'level-button next-button'
    } else if (buttonLook === 'unavailableLevel') {
        buttonStyle = 'level-button disabled'
    }

    return (
        <div className={buttonStyle}
             onClick={buttonDisabled? null :changeScreen}
        >
            {children}
        </div>

    )
};

export default LevelButton;