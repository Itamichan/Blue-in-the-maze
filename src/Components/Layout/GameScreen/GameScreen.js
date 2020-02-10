import React, {Fragment} from 'react';
import StartButton from "../../MazeContainer/Buttons/StartButton/StartButton";
import './GameScreen.scss';

const GameScreen = ({onButtonClick, screenHeader, screenBackground}) => {

    return (
        <Fragment>
            <div id={'game-screen'}>
                <img src={screenBackground} alt="background image"/>
                <h1>{screenHeader}</h1>
                <StartButton changeScreen={onButtonClick}/>
            </div>
        </Fragment>
    )
};

export default GameScreen;