import React from 'react';
import './LevelButtons.scss';


const LevelButton = ({changeScreen, children, disabled, levelStyle}) => {

    let buttonStyle;
    if (levelStyle === 'levelCompleted') {
        buttonStyle = 'generic-button'
    } else if (levelStyle === 'nextLevel') {
        buttonStyle = 'generic-button next-button'
    } else if (levelStyle === 'unavailableLevel') {
        buttonStyle = 'generic-button disabled'
    }

    return (
        <div className={buttonStyle}
             onClick={changeScreen}
        >
            {children}
        </div>

    )
};

export default LevelButton;