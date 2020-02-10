import React from 'react';
import GameScreen from "../Layout/GameScreen/GameScreen";


const StartScreen = ({onStartClick}) => {

    return (
        <GameScreen
            screenBackground="./intro-image.png"
            onButtonClick={onStartClick}
        />
    )
};

export default StartScreen;