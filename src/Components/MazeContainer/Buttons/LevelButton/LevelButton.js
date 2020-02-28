import React from 'react';
import './LevelButton.scss';


const LevelButton = ({changeScreen, children, buttonLook, buttonDisabled}) => {

    //checks what class to apply to the button
    let buttonStyle;
    if (buttonLook === 'levelCompleted') {
        buttonStyle = 'button-default level-button'
    } else if (buttonLook === 'nextLevel') {
        buttonStyle = 'button-default level-button next-button'
    } else if (buttonLook === 'unavailableLevel') {
        buttonStyle = 'button-default level-button disabled-button'
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