import React from 'react';
import './LevelButton.scss';


const LevelButton = ({changeScreen, children, levelStyle, disabled}) => {

    let buttonStyle;
    if (levelStyle === 'levelCompleted') {
        buttonStyle = 'level-button'
    } else if (levelStyle === 'nextLevel') {
        buttonStyle = 'level-button next-button'
    } else if (levelStyle === 'unavailableLevel') {
        buttonStyle = 'level-button disabled'
    }

    return (
        <div className={buttonStyle}
             onClick={disabled? null :changeScreen}
        >
            {children}
        </div>

    )
};

export default LevelButton;