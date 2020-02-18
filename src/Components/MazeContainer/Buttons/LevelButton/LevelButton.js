import React from 'react';
import './LevelButton.scss';


const LevelButton = ({changeScreen, children, buttonLook, buttonDisabled}) => {

    //checks what class to apply to the button
    let buttonStyle;
    if (buttonLook === 'levelCompleted') {
        buttonStyle = 'level-button button-no-selection'
    } else if (buttonLook === 'nextLevel') {
        buttonStyle = 'level-button next-button button-no-selection'
    } else if (buttonLook === 'unavailableLevel') {
        buttonStyle = 'level-button disabled button-no-selection'
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