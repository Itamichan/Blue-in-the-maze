import React from 'react';
import './GameBackground.scss';

const GameBackground = ({children}) => {
    return (
        <div id={'game-bg'}>{children}</div>

    )
};

export default GameBackground;